function searchMatrix(matrix: number[][], target: number): boolean {
    let row = 0;
    let col = matrix[0].length - 1; // start at top-right

    while (row < matrix.length && col >= 0) {
        const val = matrix[row][col];

        if (val === target) {
            return true;
        } else if (val > target) {
            col--; // move left
        } else {
            row++; // move down
        }
    }

    return false; // target not found
}
