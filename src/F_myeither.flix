mod MyEither {
    pub enum Either[e,v] {
        case Left(e),
        case Right(v)
    }

    pub def isRight(m: Either[e, v]): Bool =
        match m {
            case Either.Right(_) => true,
            case Either.Left(_) => false
        }    

    pub def isLeft(m: Either[e, v]): Bool =
        match m {
            case Either.Right(_) => false,
            case Either.Left(_) => true
        }        

}