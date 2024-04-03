mod FunctionCurrying {
    pub def curry2(f: (a, b) -> c): a -> b -> c =
        x -> y -> f(x, y)
}