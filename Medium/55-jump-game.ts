function canJump(nums: number[]): boolean {
    let goal = nums.length - 1;
    for (let r = nums.length - 2; r >= 0; r--){
        if (r + nums[r] >= goal){
            goal = r;
        }
    }

    return goal === 0 ? true : false;
}