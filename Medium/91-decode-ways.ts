// O(n^2) time complexity due to overlapping subproblems
function numDecodings(s: string): number {
    const n = s.length;

    function dfs(i: number): number {
        // Base case: reached the end successfully
        if (i === n) return 1;

        // A '0' cannot be decoded
        if (s[i] === '0') return 0;

        // Single-digit decode
        let ways = dfs(i + 1);

        // Two-digit decode (check if within 10–26)
        if (i + 1 < n && Number(s.slice(i, i + 2)) <= 26) {
            ways += dfs(i + 2);
        }

        return ways;
    }

    return dfs(0);
}


// O(n) time complexity with memoization to avoid redundant calculations
function numDecodingsII(s: string): number {
    const n = s.length;
    const memo: number[] = Array(n).fill(-1);

    function dfs(i: number): number {
        if (i === n) return 1; // reached end successfully
        if (s[i] === '0') return 0; // cannot decode '0'

        if (memo[i] !== -1) return memo[i];

        // single digit
        let ways = dfs(i + 1);

        // two digits
        if (i + 1 < n && Number(s.slice(i, i + 2)) <= 26) {
            ways += dfs(i + 2);
        }

        memo[i] = ways;
        return ways;
    }

    return dfs(0);
}
