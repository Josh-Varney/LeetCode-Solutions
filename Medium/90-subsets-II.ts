function subsetsWithDup(nums: number[]): number[][] {
    let res: number[][] = [];

    nums.sort((a, b) => a - b);
    
    function backtrack(idx: number, arr: number[]){
        if (idx === nums.length){
            res.push([...arr]);
            return;
        }

        arr.push(nums[idx]);
        backtrack(idx + 1, arr);
        arr.pop();

        while (idx + 1 < nums.length && nums[idx] === nums[idx + 1]) idx++;
        backtrack(idx + 1, arr);
    }

    backtrack(0, []);

    return res;
};