function subsets(nums: number[]): number[][] {
    let res: number[][] = [];

    function backtracking(idx: number, arr: number[]){
        res.push([...arr]);

        for (let start = idx; start < nums.length; ++start){
            arr.push(nums[start]);

            backtracking(start + 1, arr);

            arr.pop();
        }
    }

    backtracking(0, []);

    return res;
};