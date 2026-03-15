function deleteDuplicatesIII(head: ListNode | null): ListNode | null {
    if (!head) return head;

    let set = new Set<number>();
    let dummy = new ListNode(0);
    let newHead = dummy;

    while (head){
        if (set.has(head.val)){
            head = head.next;
            continue;
        }
        set.add(head.val);
        newHead.next = new ListNode(head.val);

        newHead = newHead.next;
        head = head.next;
    }

    return dummy.next;
};