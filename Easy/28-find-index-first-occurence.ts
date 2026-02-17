function strStr(haystack: string, needle: string){
    for (let i = 0; i < haystack.length; i++){
        if(haystack.slice(i, i + needle.length) == needle){
            return i;
        }
    }
    return -1;
}