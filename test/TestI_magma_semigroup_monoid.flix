use Magma.Magma

///
/// A Magma is a category which has a concat operation that takes 2 values of the category and 
/// produces another value of the same category.
/// e.g concat(Int32, Int32) -> Int32
/// 
@Test
def isAdditionMagma() : Bool =
    Magma.concat(30, 20) == 50