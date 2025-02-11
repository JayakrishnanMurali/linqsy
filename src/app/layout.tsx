import { Inter } from "next/font/google";
import "../styles/globals.css";
import type React from "react"; // Import React

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Linqsy - One Link for All",
  description:
    "Create a beautiful, customizable bio link page that connects your audience to all your important content, social profiles, and websites in one place.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
