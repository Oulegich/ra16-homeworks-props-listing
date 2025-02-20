const getHighlightingRemainder = (remainder: number | undefined): string | undefined => {
    if (!remainder) return 'Remainder not found('
    if (remainder <= 10) return 'level-low'
    if (remainder <= 20) return 'level-medium'
    if (remainder > 20) return 'level-high'
    return undefined;
}

export default getHighlightingRemainder