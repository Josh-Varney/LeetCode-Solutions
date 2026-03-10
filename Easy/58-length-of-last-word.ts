function lengthOfLastWord(s: string): number {
    let str = s.trim();
    let strArr = str.split(" ");
    return strArr[strArr.length - 1].length;
}