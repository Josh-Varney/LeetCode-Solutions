function countAndSay(n: number): string {
    if (n == 1){
        return "1"
    }

    let previous = countAndSay(n - 1);

    let resultRLE: string = "", count: number = 1;
    for (let i = 0; i < previous.length; ++i){
        if (i + 1 < previous.length && previous[i] === previous[i + 1]){
            count++;
            continue;
        }
        resultRLE = resultRLE + String(count) + previous[i]
        count = 1;
    }
    return resultRLE;
};