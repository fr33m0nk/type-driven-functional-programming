use Magma.Magma
use Semigroup.Semigroup

///
/// A Magma is a category which has a concat operation that takes 2 values of the category and 
/// produces another value of the same category.
/// e.g concat(Int32, Int32) -> Int32
/// 
@Test
def isAdditionMagma() : Bool =
    Magma.concat(30, 20) == 10

///
/// A Semigroup is a Magma which has a concat operation that takes 2 values of the category and 
/// produces another value of the same category. However, this operation is associative in nature i.e. 
/// concat(x, concat(y, z)) == concat(z, concat(y, x)) == concat(y, concat(z, x))
/// e.g concat(Int32, Int32) -> Int32
/// 
@Test
def isAdditionSemigroup() : Bool =
    Semigroup.concat(10, Semigroup.concat(30, 20)) == Semigroup.concat(20, Semigroup.concat(30, 10)) and Semigroup.concat(30, Semigroup.concat(20, 10)) == 60