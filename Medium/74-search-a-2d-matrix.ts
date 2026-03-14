function searchMatrix(matrix: number[][], target: number): boolean {
    let row = 0;
    let col = matrix[0].length - 1; 

    while (row < matrix.length && col >= 0) {
        const val = matrix[row][col];

        if (val === target) {
            return true;
        } else if (val > target) {
            col--;
        } else {
            row++; 
        }
    }

    return false;
}
