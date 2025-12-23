import enData from '@/data/en.json';
import idData from '@/data/id.json';

export type Language = 'id' | 'en';

export type Dictionary = typeof enData;

const dictionaries: Record<Language, Dictionary> = {
    id: idData,
    en: enData,
};

/**
 * Get dictionary for server components
 * @param lang - Language code from route parameter
 * @returns The dictionary object for direct property access
 */
export function getDictionary(lang: Language = 'en'): Dictionary {
    const language = (lang === 'id' || lang === 'en') ? lang : 'en';
    return dictionaries[language];
}
