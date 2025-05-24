import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layouts/Header";
import Head from "next/head";

const font = Urbanist({
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
        <title>Stelarhub - Solusi & Jasa AI untuk Bisnis Modern</title>
        <meta name="description" content="Stelarhub adalah agensi digital yang menyediakan solusi dan jasa AI untuk bisnis modern. Optimalkan bisnis Anda dengan teknologi Artificial Intelligence terbaik." />
        <meta name="keywords" content="Stelarhub, AI, Artificial Intelligence, Solusi AI, Jasa AI, Digital Agency, Bisnis, Teknologi, Web Development, Web Design, SEO, Marketing, Branding" />
        <meta name="application-name" content="Stelarhub" />
        <link rel="canonical" href="https://stelarhub.com" />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Stelarhub - Solusi & Jasa AI untuk Bisnis Modern" />
        <meta property="og:description" content="Stelarhub adalah agensi digital yang menyediakan solusi dan jasa AI untuk bisnis modern. Optimalkan bisnis Anda dengan teknologi Artificial Intelligence terbaik." />
        <meta property="og:url" content="https://stelarhub.com" />
        <meta property="og:site_name" content="Stelarhub" />
        <meta property="og:image" content="https://stelarhub.com/og-image.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Stelarhub - Solusi & Jasa AI untuk Bisnis Modern" />
        <meta name="twitter:description" content="Stelarhub adalah agensi digital yang menyediakan solusi dan jasa AI untuk bisnis modern. Optimalkan bisnis Anda dengan teknologi Artificial Intelligence terbaik." />
        <meta name="twitter:image" content="https://stelarhub.com/og-image.jpg" />
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Stelarhub',
          url: 'https://stelarhub.com',
          logo: 'https://stelarhub.com/logo.png',
          sameAs: [
            'https://www.instagram.com/stelar.hub',
            'https://www.linkedin.com/company/stelarhub',
            'https://twitter.com/stelarhub'
          ],
          description: 'Stelarhub adalah agensi digital yang menyediakan solusi dan jasa AI untuk bisnis modern.'
        }) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Stelarhub',
          url: 'https://stelarhub.com',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://stelarhub.com/search?q={search_term_string}',
            'query-input': 'required name=search_term_string'
          }
        }) }} />
        <meta key="pinterest-verify" name="p:domain_verify" content="dd2c41d877d64116fb94ff00bef2c212" />
      </Head>

      <body className={`${font.className} bg-dark text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}