function getPermutation(n: number, k: number): string {
    const used = Array(n).fill(false);
    let res = "";
    let set = [];
    

    // create set 
    for (let i = 1; i < n + 1; ++i){
        set.push(String(i));
    }

    
    function backtrack(str: string){
        if (str.length === n){
            k--;
            if (k === 0){
                res = str;
            }
            return;
        }

        for (let i = 0; i < n; i++){
            if (used[i]) continue;
            used[i] = true;
            backtrack(str + (i + 1));
            used[i] = false;
            if (k === 0) return;
        }
    }

    backtrack("");

    return res;
};