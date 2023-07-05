import {increment, toString, isEven, sum} from './01_functions'
import {compose} from './02_function_composition'
import {curry} from './03_function_currying'
import {sumAll} from './04_function_recursion'
import {Option, Maybe, some, none, isNone, just, nothing, isNothing} from './05_option_and_maybe'
import {Either, left, right, isLeft} from './06_either'

/*
02. Function composition
*/
type IncrementThenToString = (n: number) => string
const incrementThenToString: IncrementThenToString = compose(toString, increment)
console.log('02. Function composition ', incrementThenToString(10));

/*
03. Curried sum
*/
type CurriedSum = (x: number) =>(y: number) => number
const curriedSum: CurriedSum = curry(sum)
console.log('03. Curried sum', curriedSum(10)(-5))

/*
04. Recursive sum with accumulator
*/
console.log('04. Recursive sum with accumulator ', sumAll([])) // => 0
console.log('04. Recursive sum with accumulator ', sumAll([1, 2, 3,4 ,5, 10])) // => 25

/*
05-1. Uses Option for returned values
*/
type DivideTwoOption = (x: number) => Option<number>
const divideTwoOption: DivideTwoOption = (x) => x === 0 ? none : some(2/x)
const composedOption = compose(
    (x: Option<number>) => isNone(x) ? x : some(increment(x.value))
    ,divideTwoOption)

console.log('05-1:Option: ', composedOption(0));
console.log('05-1:Option: ', composedOption(10));

/*
05-2. Uses Maybe for returned values
*/
type DivideTwoMaybe = (x: number) => Maybe<number>
const divideTwoMaybe: DivideTwoMaybe = (x) => x === 0 ? nothing : just (2/x)
type ComposedMaybe = (x: number) => Maybe<number>
const composedMaybe: ComposedMaybe = compose(
    (x: Maybe<number>) => isNothing(x) ? x : just(increment(x.value))
    ,divideTwoMaybe
)

console.log('05-2:Maybe: ', composedMaybe(0));
console.log('05-2:Maybe: ', composedMaybe(10));

/*
06. Uses Either for returned values
*/

type DivideTwoIfEven = (n: number) => Either<string, number>
const divideTwoIfEven: DivideTwoIfEven = (n: number) => n === 0 ?
 left('cannot divide by zero') : n % 2 !== 0 ?
  left('n is not even') : right(2/n)

console.log('06. Uses Either for returned values ', divideTwoIfEven(0))
console.log('06. Uses Either for returned values ', divideTwoIfEven(11))
console.log('06. Uses Either for returned values ', divideTwoIfEven(10))

type ApplyFnToEither = <E, A, B>(
    f: (y: A) => B
) => (x: Either<E, A>) => Either<E, B>
const applyFnToEither: ApplyFnToEither = f =>
 x =>
  isLeft(x) ? x : compose(right,f)(x.right)

const composedEither = compose(
    applyFnToEither(increment)
    ,divideTwoIfEven
);

console.log('06. Uses Either for returned values with composition ', composedEither(0))
console.log('06. Uses Either for returned values with composition ', composedEither(11))
console.log('06. Uses Either for returned values with composition ', composedEither(10))