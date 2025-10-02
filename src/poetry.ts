export function capitalise(text: string): string {
	if (text === '') return '';
	return text[0]?.toUpperCase() + text.slice(1);
}

export function splitWords(text: string): string[] {
	if (text === '') return [];
	return text.trim().split(/\s+/);
}
