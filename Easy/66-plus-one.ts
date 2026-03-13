function plusOne(digits: number[]): number[] {
    let carry: number = 1;

    for (let r = digits.length - 1; r >= 0; r--){
        let sum = digits[r] + carry;
        carry = Math.floor(sum / 10) % 10;
        
        if (sum === 10){
            digits[r] = 0;
        } else {
            digits[r] = sum;
        }

        if (!carry){
            break;
        }
    }

    if (carry){
        digits.unshift(carry);
    }

    return digits;
};