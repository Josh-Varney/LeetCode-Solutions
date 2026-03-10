function generateMatrix(n: number): number[][] {
    if (n == 1){
        return [[1]];
    }
    
    let res: number[][] = [];
    for (let i = 0; i < n; i++) {
        res.push(new Array(n).fill(0));
    }

    let top = 0, bottom = res[0].length - 1;
    let left = 0, right = res.length - 1;

    let count = 1;
    while (count !== n*n+1){
        // traverse left -> right
        for (let l = left; l <= right; l++){
            res[top][l] = count;
            count++;
        }
        top++;

        // traverse top -> down
        for (let t = top; t <= bottom; t++){
            res[t][right] = count;
            count++;
        }
        right--;

        // traverse right -> left
        for (let r = right; r >= left; r--){
            res[bottom][r] = count;
            count++;
        }
        bottom--;

        // traverse bottom -> top
        for (let b = bottom; b >= top; b--){
            res[b][left] = count;
            count++;
        }
        left++;
    }

    return res;
};