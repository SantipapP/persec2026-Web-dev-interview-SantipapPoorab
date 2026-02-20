export function autocomplete(search: string, items: string[], maxResult: number): string[] {
    const query = search.toLowerCase();
    
    return items
        .filter(item => item.toLowerCase().includes(query))
        .sort((a, b) => {
            const aIdx = a.toLowerCase().indexOf(query);
            const bIdx = b.toLowerCase().indexOf(query);

            if (aIdx !== bIdx) return aIdx - bIdx;
            return a.localeCompare(b);
        })
        .slice(0, maxResult);
}