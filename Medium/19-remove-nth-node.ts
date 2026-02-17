class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null){
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (head == null){
        return null
    }

    // loop through to get the length of the linked list in array terms
    let tHead: ListNode | null = head, lLength = 0;
    while (tHead !== null){
        tHead = tHead.next;
        lLength++;
    }

    // if the length of the linked list is equal to n, then we need to remove the head node
    if (lLength == n) {
        return head.next;
    }

    // loop through to get the previous and target node in linked list 
    let tCount = lLength - n, prevNode!: ListNode;
    tHead = head;
    while (tCount && tHead){
        prevNode = tHead;
        tHead = tHead.next;
        tCount--;
    }
   
    // null tHeader->next
    if (tHead?.next == null){
        prevNode.next = null;
    }
    // non-null tHeader->next 
    else if(tHead.next){
        prevNode.next = tHead.next;
    }

    return head
};