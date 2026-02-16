function maxArea(height: number[]): number {
    let res = 0;
    let l = 0, r = height.length - 1;
    while(l < r){
        let area = Math.min(height[l], height[r]) * (r - l);
        res = Math.max(res, area);

        if (height[l] <= height[r]){
            l++;
        } else {
            r--;
        }
    }
    return res;
};