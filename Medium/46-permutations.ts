function permute(nums: number[]): number[][] {
    const result: number[][] = [];

    function backtrack(arr: number[], seen: Set<number>) {
        if (arr.length === nums.length) {
            result.push([...arr]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (seen.has(nums[i])) continue;

            // choose
            arr.push(nums[i]);
            seen.add(nums[i]);

            // explore
            backtrack(arr, seen);

            // unchoose
            arr.pop();
            seen.delete(nums[i]);
        }
    }

    backtrack([], new Set());
    return result;
}