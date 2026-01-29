function twoSum(nums: number[], target: number): number[] {
    let hMap = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        let find = target - nums[i];

        if (hMap.has(find)) {
            return [hMap.get(find)!, i];
        }

        hMap.set(nums[i], i);
    }
    return [-1, -1];
}
