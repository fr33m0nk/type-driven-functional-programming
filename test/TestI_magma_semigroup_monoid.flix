use Magma.Magma

@Test
def isAdditionMagma() : Bool =
    Magma.concat(10, Magma.concat(30, 20)) == Magma.concat(30, Magma.concat(10, 20))