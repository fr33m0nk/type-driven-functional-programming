use MyEither.Either
use MyEither.{isRight, isLeft}

@Test
def tesEither_1(): Bool = 
    true == MyEither.isLeft(Either.Left(Err("hello")))

@Test
def testEither_2(): Bool = 
    true == MyEither.isRight(Either.Right(1000))    