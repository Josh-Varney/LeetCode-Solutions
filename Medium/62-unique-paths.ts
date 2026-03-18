function uniquePaths(m: number, n: number): number {
    let memo: Map<string, number> = new Map<string, number>();

    function dfs(x: number, y: number): number{
        const key = `${x},${y}`;

        // out of bounds case
        if (x > m - 1 || y > n - 1) return 0;
        // if we reach the bottom left corner
        if (x === m - 1 && y === n - 1) return 1; 
        // memoised value
        if (memo.has(key)) return memo.get(key)!;

        const ways = dfs(x + 1, y) + dfs(x, y + 1);
        memo.set(key, ways);

        return ways;
    }

    return dfs(0, 0);
};