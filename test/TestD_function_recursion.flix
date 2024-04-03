use FunctionRecursion.sumAll

@Test
def sumAllTest(): Bool =
    let myList = (10 :: 20 :: 30 :: Nil);
    60 == FunctionRecursion.sumAll(myList)