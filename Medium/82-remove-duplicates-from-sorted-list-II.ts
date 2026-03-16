class ListNode {
  val: number;
  next: ListNode | null;

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;         
    this.next = next ?? null;   
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if (!head) return head;

    let dummy = new ListNode(0);
    let idx = dummy;

    let prev = head;
    let curr = head.next;
    let sameVal = false;

    while (prev) {
        if (curr && prev.val === curr.val) {
            sameVal = true;
        } else {
            if (!sameVal) {
                idx.next = prev;
                idx = idx.next;
            }
            sameVal = false;
        }

        prev = curr!;
        curr = curr?.next ?? null;
    }

    idx.next = null;

    return dummy.next;
}