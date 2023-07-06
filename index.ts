import {increment, toString, isEven, sum} from './01_functions'

/*
02. Function composition
*/
import {compose} from './02_function_composition'

type IncrementThenToString = (n: number) => string
const incrementThenToString: IncrementThenToString = compose(toString, increment)
console.log('02. Function composition ', incrementThenToString(10));

/*
03. Curried sum
*/
import {curry} from './03_function_currying'

type CurriedSum = (x: number) =>(y: number) => number
const curriedSum: CurriedSum = curry(sum)
console.log('03. Curried sum', curriedSum(10)(-5))

/*
04. Recursive sum with accumulator
*/
import {sumAll} from './04_function_recursion'

console.log('04. Recursive sum with accumulator ', sumAll([])) // => 0
console.log('04. Recursive sum with accumulator ', sumAll([1, 2, 3,4 ,5, 10])) // => 25

/*
05-1. Uses Option for returned values
*/
import {Option, some, none, isNone} from './05_option_and_maybe'

type DivideTwoOption = (x: number) => Option<number>
const divideTwoOption: DivideTwoOption = (x) => x === 0 ? none : some(2/x)

type ApplyFnToOption = <A, B>(
    mapFn: (y: A) => B
) => (x: Option<A>) => Option<B>
const applyFnToOption: ApplyFnToOption = mapFn => x => isNone(x) ? x : compose(some,mapFn)(x.value)

const composedOption = compose(
    applyFnToOption(increment)
    ,divideTwoOption)

console.log('05-1:Option: ', composedOption(0));
console.log('05-1:Option: ', composedOption(10));

/*
05-2. Uses Maybe for returned values
*/
import {Maybe, just, nothing, isNothing} from './05_option_and_maybe'

type DivideTwoMaybe = (x: number) => Maybe<number>
const divideTwoMaybe: DivideTwoMaybe = (x) => x === 0 ? nothing : just (2/x)

type ApplyFnToMaybe = <A, B>(
    mapFn: (y: A) => B
) => (x: Maybe<A>) => Maybe<B>
const applyFnToMaybe: ApplyFnToMaybe = mapFn => x => isNothing(x) ? x : compose(just,mapFn)(x.value)

type ComposedMaybe = (x: number) => Maybe<number>
const composedMaybe: ComposedMaybe = compose(
    applyFnToMaybe(increment)
    ,divideTwoMaybe
)

console.log('05-2:Maybe: ', composedMaybe(0));
console.log('05-2:Maybe: ', composedMaybe(10));

/*
06. Uses Either for returned values
*/
import {Either, left, right, isLeft} from './06_either'

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

/*
07. Uses List
*/
import {List, isNil, cons, nil, showList} from './07_linked_list'

const emptyList = nil
console.log('07. My List is ', showList(emptyList))
const myList: List<number> = cons(1, cons(2, cons(3, nil)))
console.log('07. My List is ', showList(myList))

/*
08-1. Patter matching on Option
*/
import {matchOptionWidened} from './08_algebraic_data_types'

const optionResult = (maybeNum: Option<number>) => matchOptionWidened(
    () => 'Value does not exist',
    (a: number) => `value is ${a}`
)(maybeNum)
const mayBeNum1 = some(12)
console.log('08-1. Pattern matching on Option ', optionResult(mayBeNum1))
const mayBeNum2 = none
console.log('08-1. Pattern matching on Option ', optionResult(mayBeNum2))

/*
08-2. Patter matching on Either
*/
import {matchEitherWidened} from './08_algebraic_data_types'

const eitherResult = (eitherNum: Either<string, number>) => matchEitherWidened(
    (e: string) => `ErrValue: ${e}`,
    (a: number) => `value is: ${a}`
)(eitherNum)
const eitherNumOrError1 = left('Error Error Error')
console.log('08-2. Pattern matching on Either ', eitherResult(eitherNumOrError1))
const eitherNumOrError2 = right(10)
console.log('08-2. Pattern matching on Either ', eitherResult(eitherNumOrError2))

/*
08-3. Patter matching on List
*/
import {matchListWidened} from './08_algebraic_data_types'

const listResult = (xs: List<number>) => matchListWidened(
    () => 'List is empty'
    , (head: number, tail: List<number>) => `head is ${head}`
)(xs)
const myListEmpty = nil
console.log('08-3. Pattern matching on List ', listResult(myListEmpty))
const myListv2 = cons(1, cons(2, cons(3, nil)))
console.log('08-3. Pattern matching on List ', listResult(myListv2))

/*
08-4. Patter matching on List using `ts-patten` npm lib
*/
import {match} from 'ts-pattern'

const listResultv2 = (xs: List<number>) => match(xs)
                                            .with({_tag: 'Nil'}, () => 'List is empty')
                                            .with({_tag: 'Cons'}, ({head, tail}) => `head is ${head}`)
                                            .exhaustive()
console.log('08-4. Patter matching on List using `ts-patten` npm lib ', listResultv2(myListEmpty))                                            
console.log('08-4. Patter matching on List using `ts-patten` npm lib ', listResultv2(myListv2))


/*
09-1. Semigroups (concatAll)
*/
import {concatAllSemigroup, addSemigroup, multiplySemigroup, appendSemigroup} from './09_magma_semigroup_monoid'

console.log('09-1. Semigroups (concatAll) using addSemigroup ',
    concatAllSemigroup(addSemigroup)(0)(cons(2, cons(3, cons(4, nil))))
)
console.log('09-1. Semigroups (concatAll) using multiplySemigroup ',
    concatAllSemigroup(multiplySemigroup)(1)(cons(2, cons(3, cons(4, nil))))
)
console.log('09-1. Semigroups (concatAll) using appendSemigroup ',
    concatAllSemigroup(appendSemigroup)('')(cons('Hello', cons('  ', cons('World!', nil))))
)

/*
09-2. Semigroups (concatAll)
*/
import {concatAllMonoid, addMonoid, appendMonoid, multiplyMonoid} from './09_magma_semigroup_monoid'

console.log('09-1. Monoid (concatAll) using addMonoid ',
    concatAllMonoid(addMonoid)(cons(2, cons(3, cons(4, nil))))
)
console.log('09-1. Monoid (concatAll) using multiplyMonoid ',
    concatAllMonoid(multiplyMonoid)(cons(2, cons(3, cons(4, nil))))
)
console.log('09-1. Monoid (concatAll) using appendMonoid ',
    concatAllMonoid(appendMonoid)(cons('Hello', cons('  ', cons('World!', nil))))
)

/*
10-1. Groups (wallet balance)
*/
import {Group} from './10_group';

const addGroup: Group<number> = {
    concat: (x, y) => x + y,
    empty: 0,
    inverse: x => -1 * x
}

const walletBalance = addGroup.concat(
    addGroup.empty,
    addGroup.concat(80,
        addGroup.concat(20,
            addGroup.inverse(10)))
)

console.log('10-1. Groups (wallet balance) ', walletBalance)

/*
10-2. Groups (Caesar cipher)
*/
const alphabets = 'abcdefghijklmnopqrstuvwxyz';

const caesarGroup: Group<number> = {
    concat: (existingKey, shiftKey) => (existingKey + shiftKey) % alphabets.length,
    empty: 0,
    inverse: (unshiftKey) => (alphabets.length - unshiftKey) % alphabets.length
}

type Encrypt = (plainText: string, shiftKey: number) => string
const encrypt: Encrypt = (plainText, shiftKey) => plainText.split('').map(c => {
    const currentKey = alphabets.indexOf(c);
    return (currentKey === -1) ? c : alphabets[caesarGroup.concat(currentKey, shiftKey)]
}).join('');

type Decrypt = (cipherText: string, key: number) => string
const decrypt: Decrypt = (cipherText, unshiftKey) => encrypt(cipherText, caesarGroup.inverse(unshiftKey))

console.log('10-2. Groups (Caesar cipher) : Encrypt `hello world!` : ', encrypt('Hello world!', 7))

console.log('10-2. Groups (Caesar cipher) : Decrypt `hello world!` : ', decrypt(encrypt('Hello world!', 7), 7))