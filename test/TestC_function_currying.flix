use Functions.{increment, stringify, isEven, sum}
use FunctionCurrying.curry2

@Test
def testcurry2(): Bool = 
    30 == FunctionCurrying.curry2(sum)(10)(20)