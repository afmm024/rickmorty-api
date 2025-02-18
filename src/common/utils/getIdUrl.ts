export const getIdFromUrl = (url: string): number => {
    return url ? (parseInt(url.split('/')[url.split('/').length - 1])) : 0
}