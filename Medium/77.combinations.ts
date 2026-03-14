function combine(n: number, k: number): number[][] {
    let res: number[][] = [];
    let arr: number[] = [];

    for (let i = 1; i <= n; i++) {
        arr.push(i);
    }

    function backtrack(start: number, tuple: number[], k: number) {
        if (k === 0) {
            res.push([...tuple]);
            return;
        }

        for (let i = start; i < arr.length; i++) {
            tuple.push(arr[i]);

            backtrack(i + 1, tuple, k - 1);

            tuple.pop();
        }
    }

    backtrack(0, [], k);

    return res;
}
