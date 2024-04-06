mod AlgeraicDataType {
    use MyMaybe.{Maybe, isNothing, isJust}
    use MyEither.{Either, isRight, isLeft}

    ///
    /// Model Algebraic Data Type
    ///
    // Using Record
    type alias AddressRecord = {
            city = String,
            street = String
        }

    type alias UserRecord = {
        name = String,
        age = Int32,
        address = AddressRecord
    }
    // Using tuple
    type alias AddressTuple = (String, String)
    type alias UserTuple = (String, Int32, AddressRecord)

    /// Model Sum type 
    /// These are also called CoProduct, Tagged or Disjoin Union
    pub enum NumOrBool {
        case Num(Int32),
        case Boolean(Bool)
    }

    pub enum EitherV1[e, a] {
        case Left(e),
        case Right(a)
    }

    /// Pattern Matching
    pub def patternMatchMaybe(m: MyMaybe.Maybe[a], g: Unit -> b, f: a -> b): b = match m {
        case MyMaybe.Maybe.Just(v) => f(v),
        case MyMaybe.Maybe.Nothing => g()
    }

    /// Pattern Matching
    pub def patternMatchEither(e: MyEither.Either[e, a], g: e -> b, f: a -> b): b = match e {
        case MyEither.Either.Right(v) => f(v),
        case MyEither.Either.Left(err) => g(err)
    }

}