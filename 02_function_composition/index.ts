import {increment, toString, isEven} from '../01_functions';

type Compose = <A, B, C>(
    f: (n: B) => C,
    g: (n: A) => B
    ) => (n: A) => C 
export const compose: Compose = (f,g) => n => f(g(n))
