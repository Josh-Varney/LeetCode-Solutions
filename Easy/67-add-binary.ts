function addBinary(a: string, b: string): string {
    let res: string = "";
    let carry: number = 0;
    const maxLen = Math.max(a.length, b.length);
    a = a.padStart(maxLen, "0");
    b = b.padStart(maxLen, "0");

    for (let r = a.length - 1; r >= 0; r--){
        let sum = carry + (Number(a[r]) + Number(b[r]));
        carry = 0;

        if (sum === 3){
            res = "1" + res;
            carry++;
        } else if (sum === 2){
            res = "0" + res;
            carry++;
        } else {
            res = String(sum) + res;
        }
    }

    if (carry){
        res = String(carry) + res;
    }

    return res;
}
