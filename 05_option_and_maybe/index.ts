/*

Below is an implementation of Option/Maybe type

*/

// Maybe
export type Option<A> = Some<A> | None

// Just
interface Some<A> {
    readonly _tag: 'Some',
    readonly value: A
}

// Nothing
interface None {
    readonly _tag: 'None'
}

export const some = <A>(a: A): Option<A> => ({
    _tag: 'Some',
    value: a
})

export const none: None = {
    _tag: 'None'
}

export const isNone = <A>(x: Option<A>): x is None => x._tag === 'None'

/*

Below is an alternate implementation of Option/Maybe.

*/

export type Maybe<A> = Just<A> | Nothing
type Just<A> = { value: A} 
type Nothing = typeof nothing

export const just = <A>(x: A): Maybe<A> => ({
    value: x
})
export const nothing: symbol = Symbol('Nothing')

export const isNothing = <A>(x: Maybe<A>): x is Nothing => x === nothing;