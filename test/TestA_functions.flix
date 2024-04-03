use Functions.{increment, stringify, isEven, sum}

@Test 
def testIncrement_1(): Bool =
    11 == Functions.increment(10)

@Test
def testIncrement_2(): Bool =
    -9 == Functions.increment(-10)    


@Test 
def testStringify_1(): Bool =
    "11" == Functions.stringify(11)

@Test
def testStringify_2(): Bool =
    "-10" == Functions.stringify(-10)    

@Test
def testIsEven_1(): Bool =
    true == Functions.isEven(10)

@Test
def testIsEven_2(): Bool =
    false == Functions.isEven(11)

    