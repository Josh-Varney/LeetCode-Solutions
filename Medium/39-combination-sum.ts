function combinationSum(candidates: number[], target: number): number[][] {
    const result: number[][] = [];

    function backtrack(start: number, arr: number[], sum: number) {
        if (sum === target) {
            result.push([...arr]);
            return;
        }

        if (sum > target) return;

        for (let i = start; i < candidates.length; i++) {
            arr.push(candidates[i]);
            backtrack(i, arr, sum + candidates[i]);
            arr.pop();
        }
    }

    backtrack(0, [], 0);
    return result;
}
