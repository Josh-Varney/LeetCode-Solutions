function removeDuplicatesII(nums: number[]): number {
    let k: number = 0;
    let j: number = 0; let c: number = 1;
    let cNum: number | null = null;

    for (let i = 0; i < nums.length; i++){
        if (cNum && cNum === nums[i]){
            c++;
        } else {
            c = 1;
        }
        cNum = nums[i];

        if (c > 2){
            continue;
        }

        nums[j] = nums[i];

        j++; k++;
    }

    return k
}