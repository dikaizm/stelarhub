import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Section from "@/components/Section";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import Card from "@/components/Card";
import CaseStudyCard from "@/components/CaseStudyCard";
import { getDictionary, Language } from "@/lib/translations";

export default async function Home({ params }: { params: Promise<{ lang: Language }> }) {
    const { lang } = await params;
    const dict = getDictionary(lang);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            {/* Hero Section */}
            <section className="w-full pt-20 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#0f172a] py-16 sm:py-24 flex flex-col items-center text-center">

                    {/* Subtle Background Effects */}
                    <div className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/2" />
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/2" />
                    </div>

                    <div className="relative z-10 max-w-4xl px-4">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 text-balance">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">{dict.homepage.hero.title}</span> {dict.homepage.hero.titleSuffix}
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto text-balance font-light leading-relaxed">
                            {dict.homepage.hero.description}
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                            <PrimaryButton
                                label={dict.homepage.hero.getDemo}
                                link={`/${lang}/contact`}
                                icon={<ArrowRight size={18} />}
                                iconPosition="right"
                                className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white border-0 !rounded-full !px-6 !py-2.5"
                            />
                            <Link href={`/${lang}/case-studies`} className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-semibold transition-all duration-300 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/10 ring-1 ring-white/10">
                                <span>{dict.homepage.hero.customerStories}</span>
                                <ArrowRight size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Stelarea Section */}
            <Section>
                <div className="flex flex-col md:flex-row gap-16 md:gap-32 items-start">
                    <div className="md:w-1/3 md:sticky top-32">
                        <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">{dict.homepage.about.title}</h2>
                        <p className="text-text-secondary text-lg mb-8">
                            {dict.homepage.about.description}
                        </p>
                        <PrimaryButton label={dict.homepage.about.aboutUs} link={`/${lang}/about`} variant="outline" icon={<ArrowRight size={18} />} iconPosition="right" />
                    </div>

                    <div className="md:w-2/3 grid grid-cols-1 gap-12">
                        <ValueProp
                            title={dict.homepage.about.values.businessFirst.title}
                            description={dict.homepage.about.values.businessFirst.description}
                        />
                        <ValueProp
                            title={dict.homepage.about.values.beyondHype.title}
                            description={dict.homepage.about.values.beyondHype.description}
                        />
                        <ValueProp
                            title={dict.homepage.about.values.builtForGrowth.title}
                            description={dict.homepage.about.values.builtForGrowth.description}
                        />
                        <ValueProp
                            title={dict.homepage.about.values.partnership.title}
                            description={dict.homepage.about.values.partnership.description}
                        />
                    </div>
                </div>
            </Section>

            {/* What We Do Section */}
            <section className="w-full py-20 md:py-32 relative overflow-hidden">
                {/* Vibrant Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-900" />

                {/* Content Container */}
                <div className="relative z-10 container mx-auto px-6 sm:px-8 w-full">
                    {/* Section Header - Centered */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            {dict.homepage.services.title}
                        </h2>
                        <p className="text-white/90 max-w-3xl mx-auto">
                            {dict.homepage.services.description}
                        </p>
                    </div>

                    {/* Service Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ServiceCard
                            title={dict.homepage.services.cards.platforms.title}
                            description={dict.homepage.services.cards.platforms.description}
                            image="/images/service-webdev.webp"
                            learnMore={dict.homepage.services.cards.platforms.learnMore}
                            link={`/${lang}/services#web-development`}
                        />
                        <ServiceCard
                            title={dict.homepage.services.cards.design.title}
                            description={dict.homepage.services.cards.design.description}
                            image="/images/service-ux.webp"
                            learnMore={dict.homepage.services.cards.design.learnMore}
                            link={`/${lang}/services#experience-design`}
                        />
                        <ServiceCard
                            title={dict.homepage.services.cards.automation.title}
                            description={dict.homepage.services.cards.automation.description}
                            image="/images/service-ai.webp"
                            learnMore={dict.homepage.services.cards.automation.learnMore}
                            link={`/${lang}/services#ai-automation`}
                        />
                        <ServiceCard
                            title={dict.homepage.services.cards.strategy.title}
                            description={dict.homepage.services.cards.strategy.description}
                            image="/images/service-data.webp"
                            learnMore={dict.homepage.services.cards.strategy.learnMore}
                            link={`/${lang}/services#data-strategy`}
                        />
                    </div>
                </div>
            </section>

            {/* Featured Work Preview (Placeholder) */}
            <Section background="white">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">{dict.homepage.featuredWork.title}</h2>
                        <p className="text-text-secondary">{dict.homepage.featuredWork.description}</p>
                    </div>
                    <Link href={`/${lang}/case-studies`} className="hidden md:flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mt-4 md:mt-0 font-semibold">
                        {dict.homepage.featuredWork.viewStories} <ArrowRight size={18} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Case Study Cards */}
                    <CaseStudyCard
                        brand={dict.homepage.featuredWork.projects.brin.brand}
                        title={dict.homepage.featuredWork.projects.brin.title}
                        description={dict.homepage.featuredWork.projects.brin.description}
                        image="/assets/portfolio/brin-llm-eval/1.png"
                        href={`/${lang}/case-studies/brin-llm-eval`}
                    />
                    <CaseStudyCard
                        brand={dict.homepage.featuredWork.projects.lidm.brand}
                        title={dict.homepage.featuredWork.projects.lidm.title}
                        description={dict.homepage.featuredWork.projects.lidm.description}
                        image="/assets/portfolio/cortex-lidm/1.png"
                        href={`/${lang}/case-studies/cortex-lidm`}
                    />
                    <CaseStudyCard
                        brand={dict.homepage.featuredWork.projects.matafutsal.brand}
                        title={dict.homepage.featuredWork.projects.matafutsal.title}
                        description={dict.homepage.featuredWork.projects.matafutsal.description}
                        image="/assets/portfolio/matafutsal/1.png"
                        href={`/${lang}/case-studies/matafutsal`}
                    />
                </div>

                <div className="mt-8 md:hidden">
                    <Link href={`/${lang}/case-studies`} className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-semibold">
                        {dict.homepage.featuredWork.viewStories} <ArrowRight size={18} />
                    </Link>
                </div>
            </Section>

            {/* Closing CTA */}
            <Section className="py-16 md:py-24 bg-background-paper relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 mask-fade pointer-events-none" />
                <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">{dict.homepage.cta.title}</h2>
                    <p className="text-xl text-text-secondary mb-10">
                        {dict.homepage.cta.description}
                    </p>
                    <PrimaryButton
                        label={dict.homepage.cta.button}
                        link={`/${lang}/contact`}
                    />
                </div>
            </Section>
        </main>
    );
}

function ServiceCard({ title, description, image, learnMore, link }: { title: string, description: string, image: string, learnMore: string, link: string }) {
    return (
        <div className="group rounded-2xl bg-slate-800/60 backdrop-blur-md border border-white/10 overflow-hidden hover:bg-slate-800/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
            {/* Mockup Image Container */}
            <div className="p-4 pb-4">
                <div className="relative w-full aspect-square rounded-xl bg-slate-800 border border-white/10 overflow-hidden shadow-lg">
                    <Image
                        src={image}
                        alt={`${title} preview`}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>

            {/* Card Content */}
            <div className="px-6 pb-6">
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                    {description}
                </p>

                {/* Learn More Link */}
                <Link
                    href={link}
                    className="inline-flex items-center gap-2 text-white/90 hover:text-white font-semibold text-sm transition-colors group-hover:gap-3 duration-300"
                >
                    {learnMore}
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    )
}

function ValueProp({ title, description }: { title: string, description: string }) {
    return (
        <div className="flex gap-6 group">
            <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <CheckCircle2 size={18} />
            </div>
            <div>
                <h3 className="text-xl font-bold text-text mb-2">{title}</h3>
                <p className="text-text-secondary leading-relaxed">{description}</p>
            </div>
        </div>
    )
}
