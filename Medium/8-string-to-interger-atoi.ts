function myAtoi(s: string): number {
    s = s.trimStart();

    let i = 0, res = "";
    let negative = false;

    if (s[0] === "-") {
        negative = true
        i = 1;
    }else if (s[0] === "+") {
        i = 1;
    }

    for (; i < s.length; i++) {
        if (s[i] < "0" || s[i] > "9") break;
        res += s[i];
    }

    if (res === "" || res === "-") {
        return 0;
    }

    const num = negative ? -Number(res) : Number(res)
    if (num > 2 ** 31 - 1){
        return 2 ** 31 - 1
    } else if (num < -(2 ** 31)){
        return -(2 ** 31)
    } 
    return num;
}