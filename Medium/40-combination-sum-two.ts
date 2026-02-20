function combinationSum2(candidates: number[], target: number): number[][] {
    const result: number[][] = [];

    candidates.sort((a, b) => a - b);

    function backtrack(start: number, arr: number[], sum: number){
        if (sum == target){
            result.push([...arr]);
            return;
        }

        if (sum > target) return;

        for (let i = start; i < candidates.length; i++){
            if (i > start && candidates[i] === candidates[i - 1]) continue;

            arr.push(candidates[i]); 

            backtrack(i + 1, arr, sum + candidates[i]);

            arr.pop();
        }
    }

    backtrack(0, [], 0);

    return result;
}