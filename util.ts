export function isEmpty<T extends Object>(obj: T) {
    if (obj === null || obj === undefined || obj.toString() === '' || 
        (obj !== null && typeof obj === 'object' && !Object.keys(obj).length) ||
        (typeof obj === 'function' && !obj.length)) {
        return true
    }
    return false
}