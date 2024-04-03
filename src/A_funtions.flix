mod Functions {
    pub def increment(n: Int32): Int32 =
        n + 1 

    pub def stringify(n: Int32): String =
        Int32.toString(n)

    pub def isEven(n: Int32): Bool = 
        Int32.modulo(n, 2) == 0

    pub def sum(a: Int32, b: Int32): Int32 =
        a + b

}