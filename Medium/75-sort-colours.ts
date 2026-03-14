function sortColors(nums: number[]): void {
    if (nums.length === 1) return;

    let map = new Map<number, number>();
    for (let i = 0; i < nums.length; ++i){
        const count = (map.get(nums[i]) || 0) + 1;
        map.set(nums[i], count);
    }

    for (let i = 0; i < nums.length; ++i){
        if (map.has(0) && map.get(0) !== 0){
            nums[i] = 0;
            map.set(0, map.get(0)! - 1);
        } else if (map.has(1) && map.get(1) !== 0){
            nums[i] = 1;
            map.set(1, map.get(1)! - 1);
        } else {
            nums[i] = 2;
            map.set(2, map.get(2)! - 1);
        }

        console.log(nums)
    }
};