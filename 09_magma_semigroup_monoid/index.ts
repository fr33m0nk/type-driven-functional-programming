import {List} from '../07_linked_list'
import {matchListWidened} from '../08_algebraic_data_types'

interface Magma<A> {
    concat: (x: A, y:A) => A
}

/*
Typescript has no way of exercising associativity validation via Types
Thus, tests are to relied on e.g. assert(f(g(x)) === g(f(x)))
*/
interface Semigroup<A> extends Magma<A> { }

export const addSemigroup: Semigroup<number> = { concat: (x, y) => x + y }
export const multiplySemigroup: Semigroup<number> = { concat: (x, y) => x * y }
export const appendSemigroup: Semigroup<string> = { concat: (x, y) => x.concat(y) }

export const concatAllSemigroup =  <A>(s: Semigroup<A>) => (startWith: A) => (xs: List<A>): A => matchListWidened(
    () => startWith,
    (head: A, tail: List<A>) => s.concat(head, concatAllSemigroup(s)(startWith)(tail))
)(xs)


interface Monoid<A> extends Semigroup<A> {
    empty: A
}

export const addMonoid: Monoid<number> = { ...addSemigroup, empty: 0 }
export const multiplyMonoid: Monoid<number> = { ...multiplySemigroup, empty: 1 }
export const appendMonoid: Monoid<string> = { ...appendSemigroup, empty: '' }

export const concatAllMonoid = <A>(m: Monoid<A>) => (xs: List<A>): A => matchListWidened(
    () => m.empty,
    (head: A, tail: List<A>) => m.concat(head, concatAllMonoid(m)(tail))
)(xs)