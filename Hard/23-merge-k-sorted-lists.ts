function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    let arr: number[] = [];

    for (let list of lists) {
        while (list) {
            arr.push(list.val);
            list = list.next;
        }
    }

    if (arr.length === 0) return null;

    arr.sort((a, b) => a - b);

    let dummy = new ListNode(0);
    let curr = dummy;

    for (let val of arr) {
        curr.next = new ListNode(val);
        curr = curr.next;
    }

    return dummy.next;
}
