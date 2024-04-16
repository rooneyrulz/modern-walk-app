import { Category } from "./category.types";

// Define the category names you need here
const DEFAULT_CATEGORIES = ["men's clothing", "women's clothing"];

async function fetchCategories() {
  return await (
    await fetch("https://fakestoreapi.com/products/categories")
  ).json();
}

mapCategories();
export async function mapCategories() {
  let categoryList = await fetchCategories();
  categoryList = categoryList.filter((c: string) =>
    DEFAULT_CATEGORIES.includes(c)
  );

  const classes: any = {};

  categoryList.forEach((category: string, index: string) => {
    classes[category] = `bg-${index + 1}`;
  });

  const categories = categoryList?.map((category: string, index: string) => ({
    id: index + 1,
    name: category,
    title: category,
    classNames: [classes[category]],
  }));

  return categories;
}

export const categories: Promise<Category[]> = mapCategories();
