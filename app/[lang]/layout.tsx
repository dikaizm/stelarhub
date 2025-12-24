import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import Header from "@/components/Layouts/Header";
import { LanguageProvider } from "@/contexts/LanguageContext";
import FooterWrapper from "@/components/Layouts/FooterWrapper";

const font = Plus_Jakarta_Sans({
    weight: "variable",
    style: ["normal", "italic"],
    subsets: ["latin"]
});

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang } = await params;
    const isIndonesian = lang === 'id';

    return {
        title: {
            default: isIndonesian
                ? "Stelarea - Solusi AI & Digital Terdepan untuk Bisnis Modern"
                : "Stelarea - Leading AI & Digital Solutions for Modern Business",
            template: "%s | Stelarea"
        },
        description: isIndonesian
            ? "Stelarea adalah agensi digital terdepan yang menyediakan solusi AI, machine learning, dan pengembangan web untuk mengoptimalkan bisnis modern Anda dengan teknologi terbaru."
            : "Stelarea is a leading digital agency providing AI, machine learning, and web development solutions to optimize your modern business with cutting-edge technology.",
        applicationName: "Stelarea",
        keywords: [
            "Stelarea",
            "AI",
            "Artificial Intelligence",
            "Machine Learning",
            ...(isIndonesian
                ? ["Solusi AI", "Jasa AI", "Agensi Digital", "Bisnis Digital", "Teknologi AI"]
                : ["AI Solutions", "AI Services", "Digital Agency", "Digital Business", "AI Technology"]
            ),
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
            canonical: `/${lang}`,
            languages: {
                'en': '/en',
                'id': '/id',
            },
        },
        openGraph: {
            type: "website",
            locale: isIndonesian ? "id_ID" : "en_US",
            url: `https://stelarea.com/${lang}`,
            siteName: "Stelarea",
            title: isIndonesian
                ? "Stelarea - Solusi AI & Digital Terdepan untuk Bisnis Modern"
                : "Stelarea - Leading AI & Digital Solutions for Modern Business",
            description: isIndonesian
                ? "Stelarea adalah agensi digital terdepan yang menyediakan solusi AI, machine learning, dan pengembangan web untuk mengoptimalkan bisnis modern Anda dengan teknologi terbaru."
                : "Stelarea is a leading digital agency providing AI, machine learning, and web development solutions to optimize your modern business with cutting-edge technology.",
            images: [
                {
                    url: "/og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: isIndonesian
                        ? "Stelarea - Solusi AI & Digital untuk Bisnis Modern"
                        : "Stelarea - AI & Digital Solutions for Modern Business",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: isIndonesian
                ? "Stelarea - Solusi AI & Digital Terdepan untuk Bisnis Modern"
                : "Stelarea - Leading AI & Digital Solutions for Modern Business",
            description: isIndonesian
                ? "Stelarea adalah agensi digital terdepan yang menyediakan solusi AI, machine learning, dan pengembangan web untuk mengoptimalkan bisnis modern Anda dengan teknologi terbaru."
                : "Stelarea is a leading digital agency providing AI, machine learning, and web development solutions to optimize your modern business with cutting-edge technology.",
            images: ["/og-image.jpg"],
            creator: "@stelarealab",
            site: "@stelarealab",
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
            google: "dd2c41d877d64116fb94ff00bef2c212",
            yandex: "your-yandex-verification-code",
            yahoo: "your-yahoo-verification-code",
        },
        other: {
            "p:domain_verify": "dd2c41d877d64116fb94ff00bef2c212",
        },
    };
}

export default async function LangLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}>) {
    const { lang } = await params;

    const jsonLdOrganization = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Stelarea",
        url: "https://stelarea.com",
        logo: "https://stelarea.com/logo.png",
        sameAs: [
            "https://www.instagram.com/stelarealab",
            "https://x.com/stelarealab"
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
        <>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="manifest" href={`/${lang}/site.webmanifest`} />

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

                {/* Theme color for browser UI */}
                <meta name="theme-color" content="#0a0a0a" />
            </head>
            <LanguageProvider>
                <Header />
                {children}
                <FooterWrapper />
            </LanguageProvider>
        </>
    );
}
