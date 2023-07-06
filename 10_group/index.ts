import {Monoid} from '../09_magma_semigroup_monoid'

export interface Group<A> extends Monoid<A> {
    inverse: (a: A) => A
}