type SumAll = (a: number[]) => number
type SumAllWithAccumulator = (acc: number, xs: number[]) => number

const auxSumAll: SumAllWithAccumulator = (acc, xs) => xs[0] ? auxSumAll((acc + xs[0]), xs.slice(1)) : acc

export const sumAll: SumAll = (a) => auxSumAll(0, a)

