import { cookies } from 'next/headers';
import enData from '@/data/en.json';
import idData from '@/data/id.json';

export type Language = 'id' | 'en';

const dictionaries = {
    id: idData,
    en: enData,
};

/**
 * Get nested value from object using dot notation
 */
const getNestedValue = (obj: any, path: string): string => {
    return path.split('.').reduce((current, key) => current?.[key], obj) || path;
};

/**
 * Get the current language from cookies (server-side)
 */
export async function getLanguage(): Promise<Language> {
    const cookieStore = await cookies();
    const language = cookieStore.get('language')?.value as Language;
    return language && (language === 'id' || language === 'en') ? language : 'id';
}

/**
 * Get translation function for server components
 */
export async function getTranslations() {
    const language = await getLanguage();
    const dictionary = dictionaries[language];

    return {
        language,
        t: (key: string): string => {
            const translation = getNestedValue(dictionary, key);
            return translation || key;
        },
    };
}
