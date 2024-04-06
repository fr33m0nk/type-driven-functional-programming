mod Magma {
    trait Magma[a] {
        pub def concat(x: a, y: a): a
    }

    instance Magma[Int32] {
        pub def concat(x: Int32, y: Int32): Int32 =
            x + y
    }
}

mod Semigroup {

}

mod Monoid {

}