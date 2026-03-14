function setZeroes(matrix: number[][]): void {
    let tuples = new Set<[number, number]>();

    for (let x = 0; x < matrix.length; x++){
        for (let y = 0; y < matrix[0].length; y++){
            if (matrix[x][y] === 0){
                tuples.add([x, y]);
            }
        }
    }

    for (let [x, y] of tuples){
        replaceWithZeroes(matrix, x, y);
    }
}

function replaceWithZeroes(matrix: number[][], x: number, y: number){
   for (let i = 0; i < matrix[0].length; i++){
      matrix[x][i] = 0;
   }

   for (let i = 0; i < matrix.length; i++){
      matrix[i][y] = 0;
   }
}
