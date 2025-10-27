import fs, { glob } from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'
import type { StaticImageData } from 'next/image'
import { file, z } from 'zod/v4'

export const RecipeFrontmatter = z.object({
  cook: z.string().optional(),
  image: z.string().optional(),
  prep: z.string().optional(),
  servings: z.number().optional(),
  title: z.string(),
})

export type RecipeFrontmatter = z.infer<typeof RecipeFrontmatter>

export const Recipe = RecipeFrontmatter.extend({
  cover: z.custom<StaticImageData>().optional(),
  excerpt: z.string().optional(),
  filePath: z.string(),
  slug: z.string(),
})

export type Recipe = z.infer<typeof Recipe>

const RECIPES_DIR = path.join(process.cwd(), 'src/app/food')

/**
 * Generate a slug from a file path
 * @example "focaccia/index.mdx" -> "focaccia"
 * @example "recipe.mdx" -> "recipe"
 */
function getSlugFromPath(filePath: string): string {
  return filePath.includes('/')
    ? path.dirname(filePath)
    : path.basename(filePath, '.mdx')
}

/**
 * Find all MDX files in the recipes directory
 */
async function findMdxFiles(): Promise<string[]> {
  const mdxFiles: string[] = []
  for await (const file of glob('**/*.mdx', { cwd: RECIPES_DIR })) {
    mdxFiles.push(file)
  }
  return mdxFiles
}

/**
 * Parse a single recipe MDX file
 */
async function parseRecipeFile(filePath: string): Promise<Recipe | null> {
  const fullPath = path.join(RECIPES_DIR, filePath)
  const slug = getSlugFromPath(filePath)

  try {
    const fileContents = await fs.readFile(fullPath, 'utf8')
    const { data, excerpt } = matter(fileContents)
    const frontmatter = RecipeFrontmatter.parse(data)

    let cover: StaticImageData | undefined
    if (frontmatter.image) {
      try {
        const imagePath = `./${slug}/${frontmatter.image}`
        cover = (await import(imagePath)).default as StaticImageData
      } catch (error) {
        console.error(`Error importing image for recipe ${slug}:`, error)
      }
    }

    return {
      cover,
      excerpt,
      filePath,
      slug,
      ...frontmatter,
    }
  } catch (error) {
    console.error(`Error parsing recipe ${slug}:`, error)
    return null
  }
}

/**
 * Get all recipes from the recipes directory
 */
export async function getRecipes(): Promise<Recipe[]> {
  try {
    const mdxFiles = await findMdxFiles()
    const recipes = await Promise.all(mdxFiles.map(parseRecipeFile))
    return recipes.filter(Boolean)
  } catch (error) {
    console.error('Error reading recipes directory:', error)
    return []
  }
}

export const recipes = await getRecipes()

export function getRecipe(slug: string): Recipe | undefined {
  return recipes.find((r) => r.slug === slug)
}
