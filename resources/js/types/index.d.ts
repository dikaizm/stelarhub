export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};

export interface Work {
    id: number;
    project_year: number;
    project_duration_week: number;
    project_name: string;
    client_name: string;
    title: string;
    excerpt: string;
    slug: string;
    body_about: string;
    body_background: string;
    body_brief: string;
    body_challenge: string;
    body_workscope: string;
    body_features: string;
    image_thumbnail: string;
    image_gallery: string;
    categories: {
        id: number;
        name: string;
        pivot: {
            category_id: number;
            work_id: number;
        };
    }[]
}

export interface PostData {
    id: number;
    title: string;
    excerpt: string;
    slug: string;
    body: string;
    author_id: number;
    updated_at: string;
    author: {
        id: number;
        name: string;
    };
    category: {
        id: number;
        name: string;
        codename: string;
    }
}

export interface CategoryData {
    id: number;
    name: string;
    desc: string;
    codename: string;
}

export interface Service {
    id: number;
    name: string;
    endpoint: string;
    desc: string;
    icon: string;
}

export type HomeProps = {
    recommendedWorks?: Work[];
    latestWorks?: Work[];
    services?: Service[];
}

export type StoriesProps = {
    posts?: PostData[];
    categories?: CategoryData[];
    recommendations?: PostData[];
}

export type WorksProps = {
    works?: Work[];
}