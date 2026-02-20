function permuteUnique(nums: number[]): number[][] {
    const result: number[][] = [];

    const freq = new Map<number, number>();
    for (const n of nums) {
        freq.set(n, (freq.get(n) || 0) + 1);
    }

    function backtrack(path: number[]) {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (const [num, count] of freq) {
            if (count === 0) continue;

            // choose
            path.push(num);
            freq.set(num, count - 1);

            // explore
            backtrack(path);

            // undo
            path.pop();
            freq.set(num, count);
        }
    }

    backtrack([]);
    return result;
}
