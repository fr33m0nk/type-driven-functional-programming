use Functions.{increment, stringify, isEven, sum}
use FunctionComposition.compose

@Test
def testCompose(): Bool = 
    "20" == FunctionComposition.compose(Functions.increment, Functions.stringify)(10)