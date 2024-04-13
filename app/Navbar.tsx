import { Heading } from "@radix-ui/themes";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <Heading size="9">
          <Link href="/">Modern Walk</Link>
        </Heading>
      </div>
    </div>
  );
}
