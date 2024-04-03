use MyEither.{Either, isRight, isLeft}

@Test
def tesEither_1(): Bool = 
    true == MyEither.isLeft(MyEither.Either.Left(Err("hello")))

@Test
def testEither_2(): Bool = 
    true == MyEither.isRight(MyEither.Either.Right(1000))    