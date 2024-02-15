import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layouts/Header";

const font = Plus_Jakarta_Sans({ 
  weight: "variable",
  style: ["normal", "italic"],
  subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stelar - Digital Agency",
  description: "",
  applicationName: "Stelar",
  keywords: ["Stelar", "Digital Agency", "Web Development", "Web Design", "SEO", "Marketing", "Branding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-dark text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}