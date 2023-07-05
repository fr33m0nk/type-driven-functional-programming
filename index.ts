import {increment, toString, isEven, sum} from './01_functions'
import {compose} from './02_function_composition'
import {curry} from './03_function_currying'
import {sumAll} from './04_function_recursion'
import {Option, Maybe, some, none, isNone, just, nothing, isNothing} from './05_option_and_maybe'

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