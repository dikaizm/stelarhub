import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, ChevronRight, CheckCircle2, Building2, MapPin, Users2, Target } from 'lucide-react';
import Section from '@/components/Section';
import { getCaseStudyBySlug } from '@/lib/caseStudies';
import ImageSlider from '@/components/ImageSlider';
import SimpleChart from '@/components/SimpleChart';
import { Language } from '@/lib/translations';

// Force dynamic rendering to ensure LanguageProvider context is available
export const dynamic = 'force-dynamic';

export default async function CaseStudyDetail({ params }: { params: Promise<{ lang: Language; slug: string }> }) {

    const { lang, slug } = await params;
    const study = getCaseStudyBySlug(slug);

    if (!study) {
        notFound();
    }

    const content = study[lang as keyof Pick<typeof study, 'en' | 'id'>] || study.en;

    return (
        <main className="min-h-screen pt-8 pb-16">
            {/* Header / Breadcrumbs */}
            <Section className="!pb-0">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center gap-2 text-sm text-text-secondary mb-8">
                        <Link href={`/${lang}`} className="hover:text-primary transition-colors">Home</Link>
                        <ChevronRight size={14} />
                        <Link href={`/${lang}/case-studies`} className="hover:text-primary transition-colors">Case Studies</Link>
                        <ChevronRight size={14} />
                        <span className="text-text-primary font-medium truncate">{study.brand}</span>
                    </div>

                    <div className='flex items-center gap-4'>
                        <div>
                            <div className="mb-4">
                                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-bold tracking-wider uppercase text-sm">
                                    {study.brand}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text mb-6 text-balance">
                                {content.title}
                            </h1>
                            <p className="text-xl text-text-secondary max-w-3xl leading-relaxed mb-8">
                                {content.description}
                            </p>
                        </div>

                        <div className="hidden md:flex flex-shrink-0 ml-auto pl-8">
                            <div className="w-32 h-32 rounded-3xl bg-white shadow-xl shadow-slate-200/50 flex items-center justify-center border border-slate-100 p-6 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-50"></div>
                                {/* Placeholder Logo Content */}
                                <div className="relative z-10 text-center">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 mx-auto flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                                        <span className="text-xl font-bold text-primary">{study.brand.charAt(0)}</span>
                                    </div>
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Brand Logo</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Hero Image Slider */}
            <Section className="!pt-8 !pb-12">
                <div className="max-w-7xl mx-auto">
                    <ImageSlider images={study.images} alt={content.title} />
                </div>
            </Section>

            {/* Main Content with Sticky Sidebar */}
            <Section background="transparent" className="!pt-0">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                    {/* Left Sidebar (Desktop) - Brand Profile & Stats */}
                    <div className="lg:col-span-4 relative order-2 lg:order-1">
                        <div className="sticky top-32 space-y-8">

                            {/* Brand Profile Card */}
                            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                                <h3 className="text-xs font-bold text-text-muted uppercase tracking-wider mb-2">About the Client</h3>
                                <div className="text-2xl font-bold text-text mb-6">{study.brand}</div>
                                <div className="space-y-5">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2.5 rounded-lg bg-slate-50 text-text-secondary">
                                            <Building2 size={20} />
                                        </div>
                                        <div>
                                            <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Industry</div>
                                            <div className="text-text font-medium">{content.brandProfile.industry}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="p-2.5 rounded-lg bg-slate-50 text-text-secondary">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Location</div>
                                            <div className="text-text font-medium">{content.brandProfile.location}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="p-2.5 rounded-lg bg-slate-50 text-text-secondary">
                                            <Users2 size={20} />
                                        </div>
                                        <div>
                                            <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Company Size</div>
                                            <div className="text-text font-medium">{content.brandProfile.companySize}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="p-2.5 rounded-lg bg-slate-50 text-text-secondary">
                                            <Target size={20} />
                                        </div>
                                        <div>
                                            <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-1">Use Case</div>
                                            <div className="text-text font-medium">{content.brandProfile.useCase}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Impact Stats */}
                            <div className="bg-slate-900 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                <h3 className="text-lg font-bold mb-6 relative z-10">Impact Summary</h3>
                                <div className="grid grid-cols-1 gap-6 relative z-10">
                                    {content.impactStats.map((stat, i) => (
                                        <div key={i} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                                            <div className="text-4xl font-bold text-primary mb-1">{stat.value}</div>
                                            <div className="text-sm font-medium text-slate-300">{stat.label}</div>
                                            {stat.description && <div className="text-xs text-slate-400 mt-1">{stat.description}</div>}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Main Text Content */}
                    <div className="lg:col-span-8 space-y-16 order-1 lg:order-2">

                        {/* The Challenge */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" /></svg>
                                </div>
                                <h2 className="text-2xl font-bold text-text">The Business Challenge</h2>
                            </div>
                            <div className="prose prose-lg text-text-secondary max-w-none">
                                {content.challenge.map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>
                        </div>

                        {/* The Solution */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                </div>
                                <h2 className="text-2xl font-bold text-text">The Solution</h2>
                            </div>
                            <div className="prose prose-lg text-text-secondary max-w-none mb-8">
                                {content.solution.map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>

                            {/* Key Features List (Static for now, could be dynamic) */}
                            <div className="bg-slate-50 rounded-2xl p-6 md:p-8">
                                <h3 className="font-bold text-text mb-4">Key Implemented Features</h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 size={20} className="text-primary mt-0.5 flex-shrink-0" />
                                        <span className="text-text-secondary">Custom Microservices Architecture</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 size={20} className="text-primary mt-0.5 flex-shrink-0" />
                                        <span className="text-text-secondary">Real-time Data Processing</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 size={20} className="text-primary mt-0.5 flex-shrink-0" />
                                        <span className="text-text-secondary">Intuitive Dashboard UI</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 size={20} className="text-primary mt-0.5 flex-shrink-0" />
                                        <span className="text-text-secondary">Automated CI/CD Pipelines</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* The Result */}
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                                </div>
                                <h2 className="text-2xl font-bold text-text">The Result</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 items-center">
                                <div className="prose prose-lg text-text-secondary max-w-none">
                                    {content.result.map((paragraph, idx) => (
                                        <p key={idx}>{paragraph}</p>
                                    ))}
                                </div>
                                {/* Chart Component */}
                                <SimpleChart data={study.chartData} title="Performance Impact" />
                            </div>
                        </div>

                    </div>
                </div>
            </Section>

            {/* Next Project (Simple Navigation) */}
            <Section>
                <div className="border-t border-gray-200 pt-12 max-w-7xl mx-auto">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                        <Link href={`/${lang}/case-studies`} className="font-semibold text-text hover:text-primary transition-colors order-2 sm:order-1">
                            Browse all case studies
                        </Link>
                        <Link href={`/${lang}/contact`} className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary-hover transition-all shadow-lg hover:shadow-primary/30 order-1 sm:order-2">
                            Transform your business
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </Section>
        </main>
    );
}
