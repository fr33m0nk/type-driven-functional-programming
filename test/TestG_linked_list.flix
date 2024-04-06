use LinkedList.SinglyLinkedList

@Test 
def testListtt_1(): Bool =
    let x = SinglyLinkedList.Node(10, SinglyLinkedList.Node(20, SinglyLinkedList.Tail(30)));
    "[ 10 20 30 ]" == ToString.toString(x)