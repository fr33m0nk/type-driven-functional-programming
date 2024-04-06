use MyMaybe.Maybe
use MyEither.Either
use AlgeraicDataType.{patternMatchMaybe}

@Test
def testMaybePatternMatch_1(): Bool =
    let m = Maybe.Just(10);
    let res = AlgeraicDataType.patternMatchMaybe(m, () -> "hello", x -> "${x + 1}");
    "11" == res

@Test
def testMaybePatternMatch_2(): Bool =    
    let m = Maybe.Nothing;
    let res = AlgeraicDataType.patternMatchMaybe(m, () -> "hello", x -> "${x + 1}");
    "hello" == res

@Test
def testMaybePatternEither_1(): Bool =
    let e = Either.Right(10);
    let res = AlgeraicDataType.patternMatchEither(e, (_)  -> "hello" , x -> "${x + 1}");
    "11" == res

@Test
def testMaybePatternEither_2(): Bool =   
    let e = Either.Left(10); 
    let res = AlgeraicDataType.patternMatchEither(e, (_) -> "hello", x -> "${x + 1}");
    "hello" == res    