type Increment = (n: number) => number
export const increment: Increment = n => n+1

type ToString = (n: number) => string
export const toString: ToString = n => n.toString()

type IsEven = (n: number) => boolean
export const isEven: IsEven = n => (n % 2) == 0 ? true : false;

type Sum = (a: number, b:number) => number
export const sum: Sum = (a, b) => a + b