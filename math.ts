// Return Greatest Common Divisor
export function gcd(x: number, y: number): number {
    if (x % y === 0) return y
    else return gcd(y, mod(x, y)    )
}

// Returns Largest Common Mulitple
export function lcm(x: number, y: number): number {
    return (x * y) / gcd(x, y)
}

// Returns x modulo y
export function mod(x: number, y: number) {
    x = Math.floor(x)
    y = Math.floor(y)
    if (y === 0) return x
    if (x > 0 && y < 0) return x % y + y
    if (x < 0 && y < 0) return x % y
    if (x < 0 && y > 0 && x % y < 0 ) return x % y + y
    return x % y
}

// Returns x remainder y
export function rem(x: number, y: number) {
    if (y === 0) return NaN
    return Math.floor(x % y)
}

export function divisors(x: number) {
    let res = []
    for (let i=1; i*i <= x; i++) {
        if (rem(x, i) === 0) {
            res.push(i)
            res.push(x/i)
        }
    }
    return res
}

export function isPrime(x: number) {
    if (x < 2) return false
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (mod(x, i) === 0) return false
    }
    return true
}