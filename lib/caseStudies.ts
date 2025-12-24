
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
    images: string[];
    chartData: ChartData[];
    en: {
        title: string;
        description: string;
        challenge: string[];
        solution: string[];
        result: string[];
        brandProfile: BrandProfile;
        impactStats: ImpactStat[];
    };
    id: {
        title: string;
        description: string;
        challenge: string[];
        solution: string[];
        result: string[];
        brandProfile: BrandProfile;
        impactStats: ImpactStat[];
    };
}

export const caseStudies: CaseStudy[] = [
    {
        slug: 'brin-llm-eval',
        brand: 'BRIN',
        images: [
            '/assets/portfolio/brin-llm-eval/1.png',
            '/assets/portfolio/brin-llm-eval/2.png',
            '/assets/portfolio/brin-llm-eval/3.png',
            '/assets/portfolio/brin-llm-eval/4.png',
        ],
        chartData: [
            { label: 'Manual', value: 20 },
            { label: 'Automated', value: 95 }
        ],
        en: {
            title: 'Building a Large Language Model Evaluation Platform',
            description: 'A comprehensive platform for evaluating and benchmarking Large Language Models (LLMs) for Indonesian languages.',
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
            ]
        },
        id: {
            title: 'Membangun Platform Evaluasi Large Language Model',
            description: 'Platform komprehensif untuk mengevaluasi dan melakukan benchmarking Large Language Models (LLM) untuk bahasa Indonesia.',
            challenge: [
                'BRIN membutuhkan cara yang kuat untuk mengevaluasi kinerja berbagai Large Language Models (LLM) khusus untuk bahasa Indonesia.',
                'Alat yang ada tidak disesuaikan dengan nuansa bahasa lokal, dan kurangnya platform terpusat untuk melakukan benchmark dan membandingkan berbagai model secara efektif.',
                'Para peneliti menghabiskan terlalu banyak waktu untuk memvalidasi output model secara manual, yang menyebabkan siklus iterasi yang lambat.'
            ],
            solution: [
                'Kami mengembangkan platform evaluasi khusus yang mengintegrasikan beberapa benchmark LLM.',
                'Sistem ini memungkinkan peneliti untuk mengirimkan model mereka, menjalankan tes standar di berbagai tugas linguistik bahasa Indonesia, dan memvisualisasikan hasilnya dalam dashboard yang intuitif.',
                'Kami menggunakan infrastruktur cloud yang scalable untuk menangani beban komputasi evaluasi model besar, memastikan performa yang cepat dan andal.'
            ],
            result: [
                'Platform ini berhasil melakukan benchmark lebih dari 20+ LLM, memberikan wawasan krusial tentang kinerjanya dalam tugas-tugas bahasa Indonesia.',
                'Ini telah mempercepat siklus penelitian bagi ilmuwan BRIN sebesar 40% dan menetapkan standar untuk evaluasi LLM di wilayah tersebut.',
                'Repositori data terpusat sekarang menampung koleksi benchmark LLM bahasa Indonesia terbesar.'
            ],
            brandProfile: {
                industry: 'Penelitian & Pemerintah',
                location: 'Indonesia',
                companySize: '1000+ Peneliti',
                useCase: 'Riset & Evaluasi AI'
            },
            impactStats: [
                { label: 'Model Teruji', value: '20+' },
                { label: 'Peningkatan Kecepatan Riset', value: '40%' },
                { label: 'Poin Data', value: '1M+' }
            ]
        }
    },
    {
        slug: 'cortex-lidm',
        brand: 'LIDM',
        images: [
            '/assets/portfolio/cortex-lidm/1.png',
            '/assets/portfolio/cortex-lidm/2.png',
            '/assets/portfolio/cortex-lidm/3.png',
            '/assets/portfolio/cortex-lidm/4.png',
        ],
        chartData: [
            { label: 'Before', value: 40 },
            { label: 'After', value: 90 }
        ],
        en: {
            title: 'Cortex: Advanced Learning Management System',
            description: 'A next-generation Learning Management System (LMS) designed for modern education needs.',
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
            ]
        },
        id: {
            title: 'Cortex: Sistem Manajemen Pembelajaran Canggih',
            description: 'Sistem Manajemen Pembelajaran (LMS) generasi berikutnya yang dirancang untuk kebutuhan pendidikan modern.',
            challenge: [
                'LIDM menghadapi masalah skala dengan sistem manajemen pembelajaran mereka sebelumnya.',
                'Sistem tersebut kesulitan menangani ribuan pengguna bersamaan selama waktu ujian puncak, yang menyebabkan sistem crash dan frustrasi siswa.',
                'Antarmuka pengguna sudah usang, yang menyebabkan keterlibatan siswa rendah dan hambatan administratif.'
            ],
            solution: [
                'Kami merancang "Cortex", sebuah LMS berkinerja tinggi yang dibangun dengan arsitektur microservices.',
                'Kami fokus pada desain mobile-first, fitur kolaborasi real-time, dan mesin rekomendasi berbasis AI untuk konten kursus.',
                'Sistem dioptimalkan untuk konkurensi tinggi dan toleransi kesalahan menggunakan penerapan sistem kontainer.'
            ],
            result: [
                'Cortex sekarang mendukung lebih dari 50.000 siswa aktif dengan nol downtime selama ujian akhir.',
                'Keterlibatan siswa meningkat sebesar 65% berkat peningkatan UI/UX, dan tugas-tugas administratif diotomatisasi, mengurangi beban kerja sebesar 30%.',
                'Platform ini telah menjadi standar untuk pembelajaran digital di dalam institusi tersebut.'
            ],
            brandProfile: {
                industry: 'Teknologi Pendidikan',
                location: 'Indonesia',
                companySize: '50-200 Karyawan',
                useCase: 'Manajemen Pembelajaran'
            },
            impactStats: [
                { label: 'Siswa Aktif', value: '50rb+' },
                { label: 'Peningkatan Keterlibatan', value: '65%' },
                { label: 'Downtime', value: '0%' }
            ]
        }
    },
    {
        slug: 'matafutsal',
        brand: 'MataFutsal',
        images: [
            '/assets/portfolio/matafutsal/1.png',
            '/assets/portfolio/matafutsal/2.png',
            '/assets/portfolio/matafutsal/3.png',
        ],
        chartData: [
            { label: 'Phone Booking', value: 30 },
            { label: 'App Booking', value: 85 }
        ],
        en: {
            title: 'Digital Platform for Futsal Communities',
            description: 'Connecting futsal players, venue owners, and tournament organizers in one ecosystem.',
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
            ]
        },
        id: {
            title: 'Platform Digital untuk Komunitas Futsal',
            description: 'Menghubungkan pemain futsal, pemilik tempat, dan penyelenggara turnamen dalam satu ekosistem.',
            challenge: [
                'Komunitas futsal terfragmentasi. Pemain merasa sulit untuk memesan lapangan, tim berjuang untuk menemukan lawan tanding.',
                'Pemilik tempat mengandalkan sistem pemesanan manual (pen dan kertas) yang rentan terhadap kesalahan dan pemesanan ganda.',
                'Tidak ada cara mudah untuk mengatur dan mengelola turnamen lokal.'
            ],
            solution: [
                'Kami membuat MataFutsal, ekosistem digital all-in-one.',
                'Aplikasi ini memiliki fitur pemesanan lapangan secara real-time, sistem "matchmaking" untuk mitra tanding, dan alat manajemen turnamen.',
                'Kami juga membangun dashboard SaaS khusus bagi pemilik tempat untuk mengelola jadwal dan keuangan secara efisien.'
            ],
            result: [
                'MataFutsal merekrut 100+ tempat dalam 3 bulan pertama.',
                'Tingkat pemanfaatan lapangan meningkat sebesar 25% karena visibilitas yang lebih baik dan pemesanan yang lebih mudah.',
                'Platform ini telah memfasilitasi ribuan pertandingan, menciptakan komunitas futsal yang semarak dan terhubung.'
            ],
            brandProfile: {
                industry: 'Olahraga & Hiburan',
                location: 'Indonesia',
                companySize: 'Startup',
                useCase: 'Marketplace & SaaS'
            },
            impactStats: [
                { label: 'Tempat Terintegrasi', value: '100+' },
                { label: 'Peningkatan Pemanfaatan', value: '25%' },
                { label: 'Pertandingan', value: '5rb+' }
            ]
        }
    }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
    return caseStudies.find((study) => study.slug === slug);
}
