mod MyMaybe {
    pub enum Maybe[a] {
        case Just(a),
        case Nothing
    }

    pub def isNothing(m: Maybe[a]): Bool =
        match m {
            case Maybe.Just(_) => false,
            case Maybe.Nothing => true
        }

    pub def isJust(m: Maybe[a]): Bool =
        match m {
            case Maybe.Just(_) => true,
            case Maybe.Nothing => false
        }        

}