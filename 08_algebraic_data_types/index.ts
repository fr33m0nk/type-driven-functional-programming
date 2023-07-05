/*
Model Product type
*/
//Using Object
type UserRecord = {
    name: string,
    age: number,
    address: {
        city: string,
        street: string
    }
}
//Using Tuple
type UserTuple = [string, number, [string, string]]

/*
Model Sum type 
These are also called CoProduct, Tagged or Disjoin Union
*/
// Example 1
type NumOrBool = number | boolean
// Example 2
type Eitherv2<E, A> = 
    | {_tag: 'Left', left: E}
    | {_tag: 'Right', right: A}

/*
    Patter matching on Option
*/
import {Option, isNone} from '../05_option_and_maybe'

type MatchOptionWidened = <A, B, C>(
    onNone: () => B
    ,onSome:(a: A) => C) => (x: Option<A>) => B | C    

export const matchOptionWidened: MatchOptionWidened = 
    (onNone, onSome) => a => isNone(a) ? onNone() : onSome(a.value)

/*
    Patter matching on Either
*/
import {Either, isLeft} from '../06_either'

type MatchEitherWidened = <E, A, B, C>(
    onLeft: (e: E) => C
    ,onRight:(a: A) => B) => (x: Either<E, A>) => B | C 
    
export const matchEitherWidened: MatchEitherWidened = (onLeft, onRight) => x => isLeft(x) ? onLeft(x.left) : onRight(x.right)

/*
    Patter matching on List
*/
import {List, isNil} from '../07_linked_list'
type MatchListWidened = <A, B, C>(
    onNil: () => B
    ,onCons:(head: A, tail: List<A>) => C) => (x: List<A>) => B | C  
export const matchListWidened: MatchListWidened = (onNil, onCons) => xs => isNil(xs) ? onNil() : onCons(xs.head, xs.tail)