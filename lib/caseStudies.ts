
export interface BrandProfile {
    industry: string;
    location: string;
    companySize: string;
    useCase: string;
}

export interface ImpactStat {
    label: string;
    value: string;
    description?: string;
}

export interface ChartData {
    label: string;
    value: number;
}

export interface CaseStudy {
    slug: string;
    brand: string;
    title: string;
    description: string;
    images: string[];
    challenge: string[];
    solution: string[];
    result: string[];
    brandProfile: BrandProfile;
    impactStats: ImpactStat[];
    chartData: ChartData[];
}

export const caseStudies: CaseStudy[] = [
    {
        slug: 'brin-llm-eval',
        brand: 'BRIN',
        title: 'Building a Large Language Model Evaluation Platform',
        description: 'A comprehensive platform for evaluating and benchmarking Large Language Models (LLMs) for Indonesian languages.',
        images: [
            '/assets/portfolio/brin-llm-eval/1.png',
            '/assets/portfolio/brin-llm-eval/2.png', // Assuming these exist, logic handles fallbacks if not
        ],
        challenge: [
            'BRIN needed a robust way to evaluate the performance of various Large Language Models (LLMs) specifically for Indonesian languages.',
            'The existing tools were not tailored to the nuances of the local languages, and there was a lack of a centralized platform to benchmark and compare different models effectively.',
            'Researchers were spending excessive time manually validating model outputs, leading to slow iteration cycles.'
        ],
        solution: [
            'We developed a custom evaluation platform that integrates multiple LLM benchmarks.',
            'The system allows researchers to submit their models, run standardized tests across various Indonesian linguistic tasks, and visualize the results in an intuitive dashboard.',
            'We used scalable cloud infrastructure to handle the computational load of evaluating large models, ensuring fast and reliable performance.'
        ],
        result: [
            'The platform successfully benchmarked over 20+ LLMs, providing crucial insights into their performance on Indonesian tasks.',
            'It has sped up the research cycle for BRIN scientists by 40% and established a standard for LLM evaluation in the region.',
            'The centralized data repository now hosts the largest collection of Indonesian LLM benchmarks.'
        ],
        brandProfile: {
            industry: 'Research & Government',
            location: 'Indonesia',
            companySize: '1000+ Researchers',
            useCase: 'AI Research & Evaluation'
        },
        impactStats: [
            { label: 'Models Benchmarked', value: '20+' },
            { label: 'Research Speedup', value: '40%' },
            { label: 'Data Points', value: '1M+' }
        ],
        chartData: [
            { label: 'Manual', value: 20 },
            { label: 'Automated', value: 95 }
        ]
    },
    {
        slug: 'cortex-lidm',
        brand: 'LIDM',
        title: 'Cortex: Advanced Learning Management System',
        description: 'A next-generation Learning Management System (LMS) designed for modern education needs.',
        images: [
            '/assets/portfolio/cortex-lidm/1.png',
        ],
        challenge: [
            'LIDM faced scalability issues with their previous learning management system.',
            'It struggled to handle thousands of concurrent users during peak exam times, leading to crashes and student frustration.',
            'The user interface was outdated, leading to poor student engagement and administrative bottlenecks.'
        ],
        solution: [
            'We engineered "Cortex", a high-performance LMS built with a microservices architecture.',
            'We focused on a mobile-first design, real-time collaboration features, and an AI-driven recommendation engine for course content.',
            'The system was optimized for high concurrency and fault tolerance using containerized deployment.'
        ],
        result: [
            'Cortex now supports over 50,000 active students with zero downtime during final exams.',
            'Student engagement increased by 65% due to the improved UI/UX, and administrative tasks were automated, reducing workload by 30%.',
            'The platform has become the standard for digital learning within the institution.'
        ],
        brandProfile: {
            industry: 'Education Technology',
            location: 'Indonesia',
            companySize: '50-200 Employees',
            useCase: 'Learning Management'
        },
        impactStats: [
            { label: 'Active Students', value: '50k+' },
            { label: 'Engagement Increase', value: '65%' },
            { label: 'Downtime', value: '0%' }
        ],
        chartData: [
            { label: 'Before', value: 40 },
            { label: 'After', value: 90 }
        ]
    },
    {
        slug: 'matafutsal',
        brand: 'MataFutsal',
        title: 'Digital Platform for Futsal Communities',
        description: 'Connecting futsal players, venue owners, and tournament organizers in one ecosystem.',
        images: [
            '/assets/portfolio/matafutsal/1.png',
        ],
        challenge: [
            'The futsal community was fragmented. Players found it hard to book courts, teams struggled to find opponents for sparring.',
            'Venue owners relied on manual booking systems (pen and paper) that were prone to errors and double bookings.',
            'There was no easy way to organize and manage local tournaments.'
        ],
        solution: [
            'We created MataFutsal, an all-in-one digital ecosystem.',
            'The app features real-time court booking, a "matchmaking" system for sparring partners, and tournament management tools.',
            'We also built a dedicated SaaS dashboard for venue owners to manage schedules and finances efficiently.'
        ],
        result: [
            'MataFutsal onboarded 100+ venues in the first 3 months.',
            'Court utilization rates improved by 25% due to better visibility and easier booking.',
            'The platform has facilitated thousands of matches, creating a vibrant and connected futsal community.'
        ],
        brandProfile: {
            industry: 'Sports & Leisure',
            location: 'Indonesia',
            companySize: 'Startup',
            useCase: 'Marketplace & SaaS'
        },
        impactStats: [
            { label: 'Venues Onboarded', value: '100+' },
            { label: 'Utilization Uplift', value: '25%' },
            { label: 'Matches', value: '5k+' }
        ],
        chartData: [
            { label: 'Phone Booking', value: 30 },
            { label: 'App Booking', value: 85 }
        ]
    }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
    return caseStudies.find((study) => study.slug === slug);
}
