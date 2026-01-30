function convert(s: string, numRows: number): string {
    if (numRows === 1 || numRows >= s.length) return s;

    let res = "";
    const cycleLen = 2 * (numRows - 1);

    for (let row = 0; row < numRows; row++) {
        for (let i = row; i < s.length; i += cycleLen) {
            res += s[i];

            // middle rows have a diagonal character
            const diag = i + cycleLen - 2 * row;
            if (row !== 0 && row !== numRows - 1 && diag < s.length) {
                res += s[diag];
            }
        }
    }
    return res;
}
