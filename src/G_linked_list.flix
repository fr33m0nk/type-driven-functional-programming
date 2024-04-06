mod LinkedList {
    pub enum SinglyLinkedList[a] {
        case Tail(a),
        case Node(a, SinglyLinkedList[a])
    }

    instance ToString[SinglyLinkedList[a]] with ToString[a] {
        pub def toString(l: SinglyLinkedList[a]): String = region rc {
            let sb = StringBuilder.empty(rc);
            StringBuilder.appendString!("[ ", sb);
            helper(l, sb);
            StringBuilder.appendString!("]", sb);
            StringBuilder.toString(sb)
        }
    }

    def helper(l: SinglyLinkedList[a], sb: StringBuilder[r]): StringBuilder[r] \ r with ToString[a] =     
        match l {
            case SinglyLinkedList.Tail(v) => StringBuilder.append!("${v} ", sb); sb,
            case SinglyLinkedList.Node(v, x) => StringBuilder.append!("${v} ", sb); helper(x, sb)
        }    
}