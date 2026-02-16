function longestCommonPrefix(strs: string[]): string {
    let res = "";
    let seen = new Set<string>();

    for (let i = 0; i < strs[0].length; ++i){
        seen.add(strs[0][i]);
        
        let boolVal = true;
        for (let y = 1; y < strs.length; ++y){
            if (!seen.has(strs[y][i])){
                boolVal = false;
            }
        }
       
        if (boolVal){
            res += strs[0][i];
        } else {
            return res;
        }
        
        seen.clear();
    }

    return res;
}