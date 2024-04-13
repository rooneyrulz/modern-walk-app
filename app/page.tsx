import { Flex, Heading } from "@radix-ui/themes";
import ProductCard from "./components/ProductCard";
import CategoryCard from "./components/CategoryCard";
import { Product } from "./product.types";
import { categories } from "./categories";
import { Category } from "./category.types";

function filterProductsByCategories(
  products: Product[],
  categories: Category[]
) {
  return products.map((product: Product) => {
    const matchingCategory = categories.find(
      (category) => category.name === product.category
    );
    if (matchingCategory) {
      return {
        ...product,
        categories: {
          ...matchingCategory,
          classNames: [...matchingCategory.classNames],
        },
      };
    } else {
      return {
        ...product,
        categories: null,
      };
    }
  });
}

async function getProducts() {
  const res = await (
    await fetch("https://fakestoreapi.com/products?limit=4")
  ).json();

  const products = filterProductsByCategories(res, categories);
  return products;
}

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      <section className="flash-sale my-8">
        <Heading mb="8" size="8">
          Flash Sale
        </Heading>
        <Flex gap="8" wrap="wrap" justify="center">
          {products?.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Flex>
      </section>

      <section className="categories my-8">
        <Heading mb="8" size="8">
          Categories
        </Heading>
        <Flex gap="8" wrap="wrap" justify="center">
          {categories?.map((category: any) => (
            <CategoryCard key={category} category={category} />
          ))}
        </Flex>
      </section>
    </>
  );
}
