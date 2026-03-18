function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    let memo: Map<string, number> = new Map<string, number>();
    
    function dfs(x: number, y: number): number {
        const key = `${x},${y}`;

        if (x > obstacleGrid.length - 1 || y > obstacleGrid[0].length - 1) return 0;
        if (obstacleGrid && obstacleGrid[x][y] === 1) return 0;
        if (x === obstacleGrid.length - 1 && y === obstacleGrid[0].length - 1) return 1;
        if (memo.has(key)) return memo.get(key)!;

        const ways = dfs(x + 1, y) + dfs(x, y + 1);
        memo.set(key, ways);

        return ways;
    }

    return dfs(0,0)
};