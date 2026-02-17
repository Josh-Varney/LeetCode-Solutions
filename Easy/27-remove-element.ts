function removeElement(nums: number[], val: number): number {
    let l = 0, r = 0;
    while (r < nums.length){
        if (nums[r] == val){
            r++;
            continue;
        }
        nums[l] = nums[r];
        l++;
        r++;
    }
    return l;
}