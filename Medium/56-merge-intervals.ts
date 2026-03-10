function merge(intervals: number[][]): number[][] {
    let res: number[][] = [];

    intervals.sort((a, b) => a[0] - b[0]);

    let curr = intervals[0];
    for (let interval of intervals.slice(1)){
        if (curr[1] >= interval[0]){
            curr[0] = Math.min(curr[0], interval[0]);
            curr[1] = Math.max(curr[1], interval[1]);
            continue;
        }
        res.push(curr);
        curr = interval;
    }
    res.push(curr);
    return res;
};