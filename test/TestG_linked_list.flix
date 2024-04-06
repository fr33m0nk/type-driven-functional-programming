use LinkedList.{SinglyLinkedList}

@Test 
def testListtt_1(): Bool =
    let x = LinkedList.SinglyLinkedList.Node(10, LinkedList.SinglyLinkedList.Node(20, LinkedList.SinglyLinkedList.Tail(30)));
    "[ 10 20 30 ]" == ToString.toString(x)