import { categories } from "@/app/categories";
import { Product } from "@/app/product.types";
import { Flex, Heading } from "@radix-ui/themes";
import { Category as CategoryType } from "@/app/category.types";
import ProductCard from "@/app/components/ProductCard";

async function getProductsByCategory(categoryName: string | undefined) {
  return await (
    await fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
  ).json();
}

export default async function Category({ params }: { params: { id: string } }) {
  const categoryList = await categories;
  const category = categoryList.find(
    (c: CategoryType) => c.id.toString() === params.id.toString()
  );

  const res = await getProductsByCategory(category?.name);
  const products = res.map((product: Product) => ({
    ...product,
    categories: category,
  }));

  if (!products.length) {
    return <p>No Products available!</p>
  }

  return (
    <>
      <section className="my-8">
        <Heading mb="8" size="8">
          {category?.title}
        </Heading>
        <Flex gap="8" wrap="wrap" justify="center">
          {products?.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Flex>
      </section>
    </>
  );
}
