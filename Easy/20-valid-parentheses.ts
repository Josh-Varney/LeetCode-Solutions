function isValid(s: string): boolean{
    if (s.length == 1){
        return false;
    }

    const hMap = new Map<string, string>([["(", ")"], ["{", "}"], ["[", "]"]]);
    let stack: string[] = []

    for (let i = 0; i < s.length; i++){
        if (hMap.has(s[i])){
            stack.push(s[i]);
            continue;
        }

        let element = stack.pop()!;
        if (s[i] == hMap.get(element)){
            continue
        }

        return false;
    }

    if (stack.length > 0){
        return false;
    }
    
    return true;
}