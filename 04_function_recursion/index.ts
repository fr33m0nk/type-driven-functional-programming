type SumAll = (a: number[]) => number
type SumAllWithAccumulator = (acc: number, xs: number[]) => number

const auxSumAll: SumAllWithAccumulator = (acc, xs) => (xs.length === 0) ? acc : auxSumAll((acc + xs[0]), xs.slice(1))

export const sumAll: SumAll = (a) => auxSumAll(0, a)

