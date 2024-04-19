use Magma.Magma
use Semigroup.Semigroup
use Monoid.MyMonoid

///
/// A Magma is a category which has a concat operation that takes 2 values of the category and 
/// produces another value of the same category.
/// e.g concat(Int32, Int32) -> Int32
/// 
@Test
def isNumSubstractionMagma() : Bool =
    Magma.concat(30, 20) == 10

///
/// A Semigroup is a Magma which has a concat operation that takes 2 values of the category and 
/// produces another value of the same category. However, this operation is associative in nature i.e. 
/// concat(x, concat(y, z)) == concat(z, concat(y, x)) == concat(y, concat(z, x))
/// e.g concat(Int32, Int32) -> Int32
/// 
@Test
def isNumAdditionSemigroup() : Bool =
    Semigroup.concat(10, Semigroup.concat(30, 20)) == Semigroup.concat(20, Semigroup.concat(30, 10)) and Semigroup.concat(30, Semigroup.concat(20, 10)) == 60

///
/// A Monoid is a Semigroup with empty member and identity function
/// 
@Test
def isNumAdditionAMonoidWithEmpty() : Bool =
    MyMonoid.empty() == 0

@Test
def isNumAdditionAMonoidWithIdentity() : Bool =
    MyMonoid.identity(10) == 10