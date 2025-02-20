const getСurrency = (codeСurrency: string | undefined, price: string | undefined): string => {
    if (codeСurrency === 'USD') return '$' + price
    if (codeСurrency === 'EUR') return '€' + price
    return price + ' ' + codeСurrency
}

export default getСurrency