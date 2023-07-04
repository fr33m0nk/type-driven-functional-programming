type Curry2 = <A, B, C>(
    f: (x: A, y: B) => C
) => (x: A) => (y: B) => C

export const curry: Curry2 = f => a => b => f(a, b)
