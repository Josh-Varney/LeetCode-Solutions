// 4^n time complexity
function letterCombinations(digits: string): string[] {
    const hMap = new Map<number, string>([[2, "abc"], [3, "def"], [4, "ghi"], [5, "jkl"], [6, "mno"], [7, "pqrs"], [8, "tuv"], [9, "wxyz"]]);

    let res: string[] = [];

    function backtrack(i: number, currStr: string){
        if (currStr.length == digits.length){
            res.push(currStr);
            return;
        }

        for (let char of hMap.get(Number(digits[i]))!){
            backtrack(i + 1, currStr + char)
        }
    }

    if (digits.length > 0){
        backtrack(0, "")
    }

    return res;
};