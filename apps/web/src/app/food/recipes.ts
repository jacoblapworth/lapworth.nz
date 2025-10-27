import path from 'node:path'
import type { StaticImageData } from 'next/image'
import { z } from 'zod/v4'
import { getSlugFromPath, listMdxFiles, parseMdxFrontmatter } from '@/lib/mdx'

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
  params: z.array(z.string()),
  slug: z.string(),
})

export type Recipe = z.infer<typeof Recipe>

const RECIPES_DIR = path.join(process.cwd(), 'src/app/food')

/**
 * Parse a single recipe MDX file
 */
async function parseRecipeFile(filePath: string): Promise<Recipe | null> {
  const slug = getSlugFromPath(filePath)

  try {
    const { frontmatter, excerpt } = await parseMdxFrontmatter(
      RECIPES_DIR,
      filePath,
      RecipeFrontmatter,
    )

    let cover: StaticImageData | undefined
    if (frontmatter.image) {
      try {
        const imagePath = `./${slug.join('/')}/${frontmatter.image}`
        cover = (await import(imagePath)).default as StaticImageData
      } catch (error) {
        console.error(
          `Error importing image for recipe ${slug.join('/')}:`,
          error,
        )
      }
    }

    return {
      cover,
      excerpt,
      filePath,
      params: slug,
      slug: slug.join('/'),
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
    const mdxFiles = await listMdxFiles(RECIPES_DIR)
    const recipes = await Promise.all(mdxFiles.map(parseRecipeFile))
    return recipes.filter(Boolean)
  } catch (error) {
    console.error('Error reading recipes directory:', error)
    return []
  }
}

export const recipes = await getRecipes()

export function getRecipe(params: string[]): Recipe | undefined {
  return recipes.find(
    (r) =>
      r.params.length === params.length &&
      r.params.every((part, i) => part === params[i]),
  )
}
