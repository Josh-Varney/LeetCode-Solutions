function lengthOfLongestSubstring(s: string): number {
    let set = new Set<string>();
    let left = 0, res = 0;

    for (let right = 0; right < s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        res = Math.max(res, set.size);
    }

    return res;
}
function lengthOfLongestSubstringMain(){
    const resLength = lengthOfLongestSubstring("abcabcbb");
    console.log(resLength);
}