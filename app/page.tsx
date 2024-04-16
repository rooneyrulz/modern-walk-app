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
  const filteredProducts = products.filter((product: Product) =>
    categories.some((c: Category) => c.name === product.category)
  );

  const mappedProducts = filteredProducts.map((product: Product) => {
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

  return mappedProducts;
}

async function getProducts() {
  const categoryList = await categories;
  const res = await (await fetch("https://fakestoreapi.com/products?limit=4")).json();

  const products = filterProductsByCategories(res, categoryList);
  return { products, categoryList };
}

export default async function Home() {
  const { products, categoryList } = await getProducts();

  return (
    <>
      <section className="flash-sale my-8">
        <Heading mb="8" size="8">
          Flash Sale
        </Heading>
        {products.length ? (
          <Flex gap="8" wrap="wrap" justify="center">
            {products?.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Flex>
        ) : (
          <p>No products available</p>
        )}
      </section>

      <section className="categories my-8">
        <Heading mb="8" size="8">
          Categories
        </Heading>
        {categoryList.length ? (
          <Flex gap="8" wrap="wrap" justify="center">
            {categoryList?.map((category: any) => (
              <CategoryCard key={category} category={category} />
            ))}
          </Flex>
        ) : (
          <p>No categories available</p>
        )}
      </section>
    </>
  );
}
