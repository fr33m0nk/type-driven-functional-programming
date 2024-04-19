///
/// A Magma is a category which has a concat operation that takes 2 values of the category and 
/// produces another value of the same category.
/// e.g concat(Int32, Int32) -> Int32
/// 
mod Magma {
    trait Magma[a] {
        pub def concat(x: a, y: a): a
    }

    instance Magma[Int32] {
        pub def concat(x: Int32, y: Int32): Int32 =
            x - y
    }
}

mod Semigroup {
    trait Semigroup[a] {
        pub def concat(x: a, y: a): a
    
    law associative: forall(x: a, y: a, z: a) with Eq[a] . Semigroup.concat(Semigroup.concat(x, y), z) == Semigroup.concat(x, Semigroup.concat(y, z))
    }

    instance Semigroup[Int32] {
        pub def concat(x: Int32, y: Int32): Int32 =
            x + y
    }
}

mod Monoid {

}