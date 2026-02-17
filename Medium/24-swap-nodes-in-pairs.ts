function swapPairs(head: ListNode | null): ListNode | null {
    let dummy = new ListNode(0, head);
    let prev = dummy;

    while (prev.next && prev.next.next) {
        let first = prev.next;
        let second = first.next!;

        // swap
        first.next = second.next;
        second.next = first;
        prev.next = second;

        // move forward
        prev = first;
    }

    return dummy.next;
}
