import { Box, Heading } from "@radix-ui/themes";
import Link from "next/link";

type Props = {
  key: string;
  category: any;
};

export default function CategoryCard(props: Props) {
  const classes = props.category.classNames.join(" ");

  return (
    <Link href={`/category/${props.category.id}`}>
      <Box
        maxWidth="600px"
        className={`category-box ${classes}`}
      >
        <Heading mb="5" className="text-center">
          {props.category.title}
        </Heading>
      </Box>
    </Link>
  );
}
