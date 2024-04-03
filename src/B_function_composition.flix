mod FunctionComposition {    
    pub def compose(f: a -> b, g: b -> c): (a -> c) = 
        f >> g

}