import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";

const font = Plus_Jakarta_Sans({
  weight: "variable",
  style: ["normal", "italic"],
  subsets: ["latin"]
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Extract language from pathname
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";
  const langMatch = pathname.match(/^\/(en|id)/);
  const lang = langMatch ? langMatch[1] : "en";

  return (
    <html lang={lang} className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href={`/${lang}/site.webmanifest`} />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body className={`${font.className} bg-dark text-white`}>
        {children}
      </body>
    </html>
  );
}