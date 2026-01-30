function reverse(x: number): number {
    const absoluteValue = Number(String(Math.abs(x)).split("").reverse().join(""));

    const result = x < 0 ? -absoluteValue : absoluteValue;

    if (result > 2 ** 31 - 1 || result < -(2 ** 31)){
        return 0;
    }
    
    return result;
}