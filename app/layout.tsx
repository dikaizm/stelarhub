import type { Metadata } from "next";
import { Urbanist, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layouts/Header";
import { LanguageProvider } from "@/contexts/LanguageContext";

const font = Plus_Jakarta_Sans({
  weight: "variable",
  style: ["normal", "italic"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: {
    default: "Stelarea - Solusi AI & Digital Terdepan untuk Bisnis Modern",
    template: "%s | Stelarea"
  },
  description: "Stelarea adalah agensi digital terdepan yang menyediakan solusi AI, machine learning, dan pengembangan web untuk mengoptimalkan bisnis modern Anda dengan teknologi terbaru.",
  applicationName: "Stelarea",
  keywords: [
    "Stelarea", 
    "AI", 
    "Artificial Intelligence", 
    "Machine Learning",
    "Solusi AI", 
    "Jasa AI", 
    "Digital Agency", 
    "Agensi Digital",
    "Bisnis Digital", 
    "Teknologi AI", 
    "Web Development", 
    "Web Design", 
    "SEO", 
    "Digital Marketing", 
    "Branding",
    "Data Analytics",
    "Computer Vision",
    "Prediction Model",
    "Frontend Development",
    "Backend Development",
    "UI/UX Design",
    "Social Media Marketing",
    "Brand Strategy",
    "Indonesia"
  ],
  authors: [{ name: "Stelarea Team" }],
  creator: "Stelarea",
  publisher: "Stelarea",
  metadataBase: new URL("https://stelarea.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://stelarea.com",
    siteName: "Stelarea",
    title: "Stelarea - Solusi AI & Digital Terdepan untuk Bisnis Modern",
    description: "Stelarea adalah agensi digital terdepan yang menyediakan solusi AI, machine learning, dan pengembangan web untuk mengoptimalkan bisnis modern Anda dengan teknologi terbaru.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Stelarea - Solusi AI & Digital untuk Bisnis Modern",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stelarea - Solusi AI & Digital Terdepan untuk Bisnis Modern",
    description: "Stelarea adalah agensi digital terdepan yang menyediakan solusi AI, machine learning, dan pengembangan web untuk mengoptimalkan bisnis modern Anda dengan teknologi terbaru.",
    images: ["/og-image.jpg"],
    creator: "@stelareacom",
    site: "@stelareacom",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  other: {
    "p:domain_verify": "dd2c41d877d64116fb94ff00bef2c212",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Stelarea",
    url: "https://stelarea.com",
    logo: "https://stelarea.com/logo.png",
    sameAs: [
      "https://www.instagram.com/stelareacom",
      "https://www.linkedin.com/company/stelarea",
      "https://x.com/stelareacom"
    ],
    description: "Stelarea adalah agensi digital terdepan yang menyediakan solusi AI, machine learning, dan pengembangan web untuk mengoptimalkan bisnis modern.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID"
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: ["Indonesian", "English"]
    }
  };

  const jsonLdWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Stelarea",
    url: "https://stelarea.com",
    description: "Solusi AI & Digital Terdepan untuk Bisnis Modern",
    publisher: {
      "@type": "Organization",
      name: "Stelarea"
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://stelarea.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdOrganization),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdWebsite),
          }}
        />
      </head>
      <body className={`${font.className} bg-dark text-white`}>
        <LanguageProvider>
          <Header />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}