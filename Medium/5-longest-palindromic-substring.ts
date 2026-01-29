function longestPalindrome(s: string): string {
    let res = "";
    for (let i = 0; i < s.length; ++i){
        let l = i, r = i;
        while (l >= 0 && r < s.length && s[l] === s[r]){
            if (r - l + 1 > res.length){
                res = s.slice(l, r + 1);
            }
            l--;
            r++;
        }
        let l_t = i, r_t = i + 1;
        while (l_t >= 0 && r_t < s.length && s[l_t] === s[r_t]) {
            if (r_t - l_t + 1 > res.length) {
                res = s.slice(l_t, r_t + 1);
            }
            l_t--;
            r_t++;
        }
    }
    return res;
}