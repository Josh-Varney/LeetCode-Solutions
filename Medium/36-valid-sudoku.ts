function isValidSudoku(board: string[][]): boolean {
    
    for (let x = 0; x < board.length; ++x){
        let bSet = new Set<string>();

        // check for left->right rows
        for (let y = 0; y < board.length; ++y){
            if (board[x][y] == "."){
                continue;
            } else if (bSet.has(board[x][y])){
                return false;
            } else {
                bSet.add(board[x][y]);
            }
        }
        bSet.clear();

        // check top->bottom rows
        for (let y = 0; y < board.length; ++y){
            if (board[y][x] == "."){
                continue;
            } else if (bSet.has(board[y][x])){
                return false;
            } else {
                bSet.add(board[y][x]);
            }
        }
    }

    // check 3x3 boxes
    for (let x = 0; x < 9; x += 3) {
        for (let y = 0; y < 9; y += 3) {
            let bSet = new Set<string>();
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    const val = board[x + i][y + j];
                    if (val === ".") continue;
                    if (bSet.has(val)) return false;
                    bSet.add(val);
                }
            }
        }
    }

    return true;
}