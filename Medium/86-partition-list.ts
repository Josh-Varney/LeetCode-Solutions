function partition(head: ListNode | null, x: number): ListNode | null {
    if (!head) return head;

    let leftPartition: ListNode = new ListNode(0);
    let rightPartition: ListNode = new ListNode(0);

    let curr: ListNode = head; let left_ptr: ListNode = leftPartition; let right_ptr: ListNode = rightPartition;
    while (curr){
        if (curr.val < x){
            left_ptr.next = new ListNode(curr.val);
            left_ptr = left_ptr.next;
        } else {
            right_ptr.next = new ListNode(curr.val);
            right_ptr = right_ptr.next;
        } 
        curr = curr.next!;
    }
    rightPartition = rightPartition.next!;
    left_ptr.next = rightPartition;

    return leftPartition.next;
};