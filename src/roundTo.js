export const roundTo = (num, decimalPoint) => {
    if(typeof num !== 'number'){
        throw new TypeError('num is not a valid number !!');
    }
    if(typeof decimalPoint !== 'number'){
        throw new TypeError('decimalPoint is not a valid number !!');
    }

    const multiplicationOfTen = 10 ** decimalPoint;
    return Math.round(num * multiplicationOfTen) / multiplicationOfTen;
};