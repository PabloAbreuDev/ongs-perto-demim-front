export const textAbbreviation = (text: string) => {
    if (text.length > 300) {
        return text.substring(0, 250) + "..."
    }
    return text
}

