import "@radix-ui/themes/styles.css";
import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Theme, ThemePanel } from "@radix-ui/themes";
import Navbar from "./Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Walk Application",
  description: "Fake store for showcasing the products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Theme>
          <Navbar/>
          <main>
            <div className="container">{children}</div>
          </main>
        </Theme>
      </body>
    </html>
  );
}
