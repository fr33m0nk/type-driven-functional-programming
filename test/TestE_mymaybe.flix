use MyMaybe.{isNothing, Maybe}

@Test
def testMaybe_1(): Bool = 
    true == MyMaybe.isNothing(MyMaybe.Maybe.Nothing)

@Test
def isJust(): Bool = 
    true == MyMaybe.isJust(MyMaybe.Maybe.Just(1000))    