import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Monitor, Users, Cpu, BarChart3, CheckCircle2 } from "lucide-react";
import Section from "@/components/Section";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import Card from "@/components/Card";
import CaseStudyCard from "@/components/CaseStudyCard";

export default function Home() {
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

            {/* Why Stelarea Section */}
            <Section>
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="lg:w-1/3 sticky top-32">
                        <h2 className="text-3xl md:text-4xl font-bold text-text mb-6">We Are Stelarea</h2>
                        <p className="text-text-secondary text-lg mb-8">
                            A digital agency dedicated to simplifying the complex. We combine creative design with smart technology to build solutions that help your business grow naturally.
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

            {/* What We Do Section */}
            <section className="w-full px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative overflow-hidden">
                {/* Vibrant Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-900" />

                {/* Content Container */}
                <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Section Header - Centered */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            What We Do
                        </h2>
                        <p className="text-white/90 max-w-3xl mx-auto">
                            We partner with organizations to modernize how they work. We replace manual processes and outdated tools with integrated digital solutions that drive real value.
                        </p>
                    </div>

                    {/* Service Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ServiceCard
                            title="Digital Platforms"
                            description="Custom tools that run your core operations."
                            mockupType="platforms"
                        />
                        <ServiceCard
                            title="Experience Design"
                            description="Products that are intuitive for your team and customers."
                            mockupType="design"
                        />
                        <ServiceCard
                            title="Intelligent Automation"
                            description="AI solutions that reduce manual workload."
                            mockupType="automation"
                        />
                        <ServiceCard
                            title="Data Strategy"
                            description="Transforming scattered numbers into clear direction."
                            mockupType="strategy"
                        />
                    </div>
                </div>
            </section>

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
                    {/* Case Study Cards */}
                    <CaseStudyCard
                        brand="BRIN"
                        title="LLM Evaluation Platform"
                        description="A comprehensive platform for evaluating Large Language Models specifically for Indonesian languages."
                        image="/assets/portfolio/brin-llm-eval/1.png"
                    />
                    <CaseStudyCard
                        brand="LIDM"
                        title="Cortex Learning Management"
                        description="Advanced learning management system designed for modern educational institutions."
                        image="/assets/portfolio/cortex-lidm/1.png"
                    />
                    <CaseStudyCard
                        brand="Matafutsal"
                        title="Sports Venue Booking"
                        description="A seamless booking experience for sports venues and community events."
                        image="/assets/portfolio/matafutsal/1.png"
                    />
                </div>

                <div className="mt-8 md:hidden">
                    <Link href="/case-studies" className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-semibold">
                        View Success Stories <ArrowRight size={18} />
                    </Link>
                </div>
            </Section>

            {/* Closing CTA */}
            <Section className="py-16 md:py-24 bg-background-paper relative overflow-hidden">
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

function ServiceCard({ title, description, mockupType }: { title: string, description: string, mockupType: string }) {
    return (
        <div className="group rounded-2xl bg-slate-800/60 backdrop-blur-md border border-white/10 overflow-hidden hover:bg-slate-800/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
            {/* Mockup Image Container */}
            <div className="p-4 pb-4">
                <div className="relative w-full aspect-[4/3] rounded-xl bg-gradient-to-br from-slate-700 to-slate-900 border border-white/10 overflow-hidden shadow-lg">
                    {/* Placeholder for mockup - will be replaced with actual images */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center p-6">
                            <div className="w-16 h-16 mx-auto mb-3 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
                                {mockupType === 'platforms' && <Monitor className="w-8 h-8 text-blue-400" />}
                                {mockupType === 'design' && <Users className="w-8 h-8 text-purple-400" />}
                                {mockupType === 'automation' && <Cpu className="w-8 h-8 text-pink-400" />}
                                {mockupType === 'strategy' && <BarChart3 className="w-8 h-8 text-orange-400" />}
                            </div>
                            <div className="text-xs text-white/60 font-mono">{title} Preview</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card Content */}
            <div className="px-8 pb-8">
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4">
                    {description}
                </p>

                {/* Learn More Link */}
                <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-white/90 hover:text-white font-semibold text-sm transition-colors group-hover:gap-3 duration-300"
                >
                    Learn more
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
