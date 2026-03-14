function climbStairs(n: number): number {
    const memo = new Map<number, number>();

    function dfs(x: number): number {
        if (x === n) return 1;
        if (x > n) return 0;

        if (memo.has(x)) {
            return memo.get(x)!;
        }

        const ways = dfs(x + 1) + dfs(x + 2);
        memo.set(x, ways);

        return ways;
    }

    return dfs(0);
}
