function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1 && !list2){
        return null;
    }

    let list3_h: ListNode = new ListNode(), list3 = list3_h;
    let arr: number[] = [];

    while(list1){
        arr.push(list1.val);
        list1 = list1.next;
    }
    while(list2){
        arr.push(list2.val);
        list2 = list2.next;
    }

    arr.sort((a, b) => a - b);
    
    let prevNode = list3;
    for (let num of arr){
        list3.val = num;
        prevNode = list3
        list3.next = new ListNode();
        list3 = list3.next;
    }
    // remove trailing 0
    prevNode.next = null;

    return list3_h
}