function reverseList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) return head;
    
    let prev: ListNode | null = null;
    while (head){
        let next = head.next;
        head.next = prev;
        prev = head;
        head = next;
    }

    return prev;
};