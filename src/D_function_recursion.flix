mod FunctionRecursion {
    pub def sumAll(xs: List[Int32]): Int32 =
        sumAllAux(0, xs)

    def sumAllAux(acc: Int32, xs: List[Int32]): Int32 = 
        match xs {
            case Nil => acc
            case x :: xss => sumAllAux((acc+x), xss)
        }
}