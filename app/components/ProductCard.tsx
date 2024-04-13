import { Box, Card, Text, Heading } from "@radix-ui/themes";
import Image from "next/image";

export default function ProductCard(props: any) {
  const classes = props.product?.categories?.classNames.join(" ");

  return (
    <Box maxWidth="300px" className="card-wrapper">
      <Card size="4" className="card">
        <Heading mb="5" className="card-title text-center">
          {props.product.title}
        </Heading>
        <Image
          src={props.product.image}
          alt="Bold typography"
          width={500}
          height={500}
        />
      </Card>
      <div className={`card-description ${classes}`}>
        <Heading mb="3" size="4">
          Rs {props.product.price}
        </Heading>
        <Text as="p" size="3" className="card-text">
          {props.product.description}
        </Text>
      </div>
    </Box>
  );
}
