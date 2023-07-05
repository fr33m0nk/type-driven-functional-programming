export type List<A> = Nil | Cons<A>

interface Nil {
    readonly _tag: 'Nil'
}

interface Cons<A> {
    readonly _tag: 'Cons'
    readonly head: A,
    readonly tail: List<A>
}

export const nil: List<never> = { _tag: 'Nil'}

export const cons = <A>(head: A, tail: List<A>): List<A> => ({
    _tag: 'Cons',
    head,
    tail
})

export const isNil = <A>(xs: List<A>): xs is Nil => xs._tag === 'Nil'

type AuxShowList = <A>(acc: string, xs: List<A>) => string
const auxShowList: AuxShowList = (acc, xs) => isNil(xs) ? acc :
 `${auxShowList(`${acc}${xs.head}${(isNil(xs.tail) ? '' : ', ')}`, xs.tail)}`

type ShowList =  <A>(xs: List<A>) => string
export const showList: ShowList = xs => auxShowList("", xs)