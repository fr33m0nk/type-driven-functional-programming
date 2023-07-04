import {increment, toString, isEven, sum} from './01_functions'
import {compose} from './02_function_composition'
import {curry} from './03_function_currying'
import {sumAll} from './04_function_recursion'

/*
02. Function composition
*/
type IncrementThenToString = (n: number) => string
const incrementThenToString: IncrementThenToString = compose(toString, increment)

console.log(incrementThenToString(10));


/*
03. Curried sum
*/
type CurriedSum = (x: number) =>(y: number) => number
const curriedSum: CurriedSum = curry(sum)
console.log(curriedSum(10)(-5))

/*
04. Recursive sum with accumulator
*/

console.log(sumAll([1, 2, 3,4 ,5, 10]))