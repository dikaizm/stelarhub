import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layouts/Header";
import Head from "next/head";

const font = Plus_Jakarta_Sans({
  weight: "variable",
  style: ["normal", "italic"],
  subsets: ["latin"]
});

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
      <Head>
        <meta key="pinterest-verify" name="p:domain_verify" content="dd2c41d877d64116fb94ff00bef2c212" />
      </Head>

      <body className={`${font.className} bg-dark text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}