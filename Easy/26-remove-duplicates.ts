function removeDuplicates(nums: number[]): number {
    let l = 0, r = 1;
    while (r < nums.length){
        if (nums[l] == nums[r]){
            r++;
            continue;
        }
        l++;
        nums[l] = nums[r]
    }
    return l + 1;
};