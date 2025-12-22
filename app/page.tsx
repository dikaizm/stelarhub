import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Monitor, Users, Cpu, BarChart3, CheckCircle2 } from "lucide-react";
import Section from "@/components/Section";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import Card from "@/components/Card";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            {/* Hero Section */}
            <section className="w-full pt-20 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#0f172a] border border-white/10 shadow-2xl shadow-primary/10 py-16 sm:py-24 flex flex-col items-center text-center">

                    {/* Subtle Background Effects */}
                    <div className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/2" />
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/2" />
                    </div>

                    <div className="relative z-10 max-w-4xl px-4">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 text-balance">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Digital Systems</span> That Power Modern Business
                        </h1>

                        <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto text-balance font-light leading-relaxed">
                            Stelarea translates your business goals into intelligent digital tools. We build the systems you need to streamline operations, serve customers better, and scale without friction.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                            <PrimaryButton
                                label="Get a demo"
                                link="/contact"
                                icon={<ArrowRight size={18} />}
                                iconPosition="right"
                                className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white border-0 !rounded-full !px-6 !py-2.5"
                            />
                            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full font-semibold transition-all duration-300 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/10 ring-1 ring-white/10">
                                <span>Customer stories</span>
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <Section id="what-we-do" background="white">
                <div className="mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">What We Do</h2>
                    <p className="text-xl text-text-secondary max-w-3xl">
                        We partner with organizations to modernize how they work. We replace manual processes and outdated tools with integrated digital solutions that drive real value.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    <ServiceCard
                        icon={<Monitor className="w-8 h-8 text-primary" />}
                        title="Digital Platforms"
                        description="Custom tools that run your core operations. We build secure, scalable web platforms that become the foundation of your digital business."
                    />
                    <ServiceCard
                        icon={<Users className="w-8 h-8 text-secondary" />}
                        title="Experience Design"
                        description="Products that are intuitive for your team and customers. We design interfaces that make complex systems easy to use."
                    />
                    <ServiceCard
                        icon={<Cpu className="w-8 h-8 text-primary" />}
                        title="Intelligent Automation"
                        description="AI solutions that reduce manual workload. We implement agents that handle routine workflows, allowing your people to focus on strategy."
                    />
                    <ServiceCard
                        icon={<BarChart3 className="w-8 h-8 text-indigo-500" />}
                        title="Data Strategy"
                        description="Transforming scattered numbers into clear direction. We build pipelines and dashboards that turn raw data into actionable insights."
                    />
                </div>
            </Section>

            {/* Why Stelarea Section */}
            <Section className="border-y border-border" background="paper">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="lg:w-1/3 sticky top-32">
                        <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">Why Stelarea</h2>
                        <p className="text-text-secondary text-lg mb-8">
                            We define success not by the code we write, but by the business barriers we remove.
                        </p>
                        <PrimaryButton label="About Us" link="/about" variant="outline" icon={<ArrowRight size={18} />} iconPosition="right" />
                    </div>

                    <div className="lg:w-2/3 grid grid-cols-1 gap-12">
                        <ValueProp
                            title="Business-First Approach"
                            description="We don’t start with technology; we start with your business goals and bottlenecks. Every line of code serves a specific operational purpose."
                        />
                        <ValueProp
                            title="Beyond the Hype"
                            description="We implement AI and digital tools to solve actual problems, not just to follow trends. Practicality is our priority."
                        />
                        <ValueProp
                            title="Built for Growth"
                            description="Our solutions are designed to handle your success, scaling effortlessly as you expand from 100 to 1 million users."
                        />
                        <ValueProp
                            title="Partnership, Not Just Production"
                            description="We stay invested in the long-term success of the systems we build. We are your technical partner for the long haul."
                        />
                    </div>
                </div>
            </Section>

            {/* Featured Work Preview (Placeholder) */}
            <Section background="white">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">Featured Work</h2>
                        <p className="text-text-secondary">See how we help organizations turn challenges into advantages.</p>
                    </div>
                    <Link href="/case-studies" className="hidden md:flex items-center gap-2 text-primary hover:text-primary-dark transition-colors mt-4 md:mt-0 font-semibold">
                        View Success Stories <ArrowRight size={18} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Placeholders for Case Study Cards */}
                    <Card className="min-h-[300px] flex items-center justify-center border-dashed border-border bg-background-subtle">
                        <span className="text-text-muted font-medium">Case Study #1 Coming Soon</span>
                    </Card>
                    <Card className="min-h-[300px] flex items-center justify-center border-dashed border-border bg-background-subtle">
                        <span className="text-text-muted font-medium">Case Study #2 Coming Soon</span>
                    </Card>
                    <Card className="min-h-[300px] flex items-center justify-center border-dashed border-border bg-background-subtle">
                        <span className="text-text-muted font-medium">Case Study #3 Coming Soon</span>
                    </Card>
                </div>

                <div className="mt-8 md:hidden">
                    <Link href="/case-studies" className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-semibold">
                        View Success Stories <ArrowRight size={18} />
                    </Link>
                </div>
            </Section>

            {/* Closing CTA */}
            <Section className="py-24 md:py-32 bg-background-paper relative overflow-hidden border-t border-border">
                <div className="absolute inset-0 bg-primary/5 mask-fade pointer-events-none" />
                <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">Ready to modernize your operations?</h2>
                    <p className="text-xl text-text-secondary mb-10">
                        Let’s design a solution that works as hard as you do.
                    </p>
                    <PrimaryButton
                        label="Start Your Transformation"
                        link="/contact"
                    />
                </div>
            </Section>
        </main>
    );
}

function ServiceCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <Card className="h-full flex flex-col" variant="paper">
            <div className="w-14 h-14 rounded-xl bg-white border border-border flex items-center justify-center mb-6 shadow-sm text-primary">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-text mb-4">{title}</h3>
            <p className="text-text-secondary leading-relaxed">
                {description}
            </p>
        </Card>
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
