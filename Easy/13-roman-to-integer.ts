function romanToInt(s: string): number {
    if (!s){
        return 0;
    }
    const hMap = new Map<string, number>([["I", 1], ["V", 5], ["X", 10], ["L", 50], ["C", 100], ["D", 500], ["M", 1000]]);
    
    let i = 0, sum = 0;
    while (i < s.length) {
        const current = hMap.get(s[i])!;
        const next = i + 1 < s.length ? hMap.get(s[i + 1])! : 0;

        if (next > current) {
            sum += next - current;
            i += 2;
        } else {
            sum += current;
            i++;
        }
    }

    return sum;
};