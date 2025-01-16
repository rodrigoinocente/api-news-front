export function reduceText(text: string, maxTitleLength: number): string {
    const reduceText =
        text.length > maxTitleLength ? text.substring(0, maxTitleLength).trim() + '...' : text
    return reduceText;
}