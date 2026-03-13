class ListNode {
    val: number
    next: ListNode | null
    
    constructor(val?: number, next?: ListNode | null){
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || k == 0) return head;

    let num = new Array<number>();
    let head_ptr: ListNode | null = head;
    let length = 0;

    while (head_ptr){
        length++;
        num.push(head_ptr.val);
        head_ptr = head_ptr.next;
    }

    k = k % length;

    if (length === 0 || k === 0) return head;

    while (k){  
        const val: number | undefined = num.pop();
        num.unshift(val!);
        k--;
    }

    let idx = 0;
    let head_ptr_two: ListNode | null = head;

    while (head_ptr_two){
        head_ptr_two.val = num[idx];
        head_ptr_two = head_ptr_two.next;
        idx++;
    }
    
    return head;
};