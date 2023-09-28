export default function estimateReadingTime(content: string, wordsPerMinute: number = 200): number {
    // Calculate the number of words in the content
    const wordCount = content.split(/\s+/).length;

    // Calculate the estimated reading time in minutes
    const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);

    return readingTimeMinutes;
}
