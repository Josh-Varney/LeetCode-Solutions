function generateParenthesis(n: number): string[] {
    let resArr: string[] = [];

    function backtracking(openN: number, closeN: number, currStr: string){
        if (openN == closeN && openN == n){
            resArr.push(currStr);
            return;
        }

        if (openN < n) {
            backtracking(openN + 1, closeN, currStr + "(");
        }

        if (closeN < openN) {
            backtracking(openN, closeN + 1, currStr + ")");
        }
    }

    backtracking(0, 0, "");
    
    return resArr;
}