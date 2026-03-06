function divide(dividend: number, divisor: number): number {
    const INT_MIN = -(2 ** 31);
    const INT_MAX = 2 ** 31 - 1;

    if (dividend === INT_MIN && divisor === -1) return INT_MAX;

    const sign = (dividend > 0) === (divisor > 0) ? 1 : -1;

    let dvd = Math.abs(dividend);
    let dvs = Math.abs(divisor);
    let result = 0;

    while (dvd >= dvs) {
        let temp = dvs;
        let multiple = 1;

        while (dvd >= (temp << 1)) {
            temp <<= 1;
            multiple <<= 1;
        }

        dvd -= temp;
        result += multiple;
    }

    result = sign === 1 ? result : -result;

    return Math.min(Math.max(result, INT_MIN), INT_MAX);
}
