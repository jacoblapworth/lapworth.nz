import fs from 'node:fs/promises'
import path from 'node:path'
import matter from 'gray-matter'
import type { StaticImageData } from 'next/image'
import { z } from 'zod/v4'

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
  slug: z.string(),
})

export type Recipe = z.infer<typeof Recipe>

const RECIPES_DIR = path.join(process.cwd(), 'src/app/food/(recipes)')

export async function getRecipes(): Promise<Recipe[]> {
  try {
    // Read all items in the food folder
    const items = await fs.readdir(RECIPES_DIR, { withFileTypes: true })

    // Filter for directories only
    const recipeSlugs = items
      .filter((item) => item.isDirectory())
      .map((item) => item.name)

    const recipes: Recipe[] = []

    for (const slug of recipeSlugs) {
      const recipePath = path.join(RECIPES_DIR, slug, 'page.mdx')

      try {
        await fs.access(recipePath)

        const fileContents = await fs.readFile(recipePath, 'utf8')
        const { data, content } = matter(fileContents)
        const frontmatter = RecipeFrontmatter.parse(data)

        // Import the cover image if specified
        let cover: StaticImageData | undefined
        if (frontmatter.image) {
          try {
            const imagePath = `./${slug}/${frontmatter.image}`
            cover = (await import(imagePath)).default as StaticImageData
          } catch (error) {
            console.error(`Error importing image for recipe ${slug}:`, error)
          }
        }

        recipes.push({
          ...frontmatter,
          cover,
          slug,
        })
      } catch (error) {
        // Skip if page.mdx doesn't exist or can't be read
        if ((error as NodeJS.ErrnoException).code !== 'ENOENT') {
          console.error(`Error parsing recipe ${slug}:`, error)
        }
      }
    }

    return recipes
  } catch (error) {
    console.error('Error reading recipes directory:', error)
    return []
  }
}

export const recipes = await getRecipes()
