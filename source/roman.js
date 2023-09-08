function roman(input) {
    const romanToAr = {
        'i': 1,
        'v': 5,
        'x': 10,
        'l': 50,
        'c': 100,
        'd': 500,
        'm': 1000
    };
  
    function romanToArabic(romanNumber) {
        romanNumber = romanNumber.toLowerCase();
        let result = 0;
        for (let i = 0; i < romanNumber.length; i++) {
            const currentSymbol = romanNumber[i];
            const currentv = romanToAr[currentSymbol];
            const nextSymbol = romanNumber[i + 1];
            const nextv = romanToAr[nextSymbol];
    
            if (nextv && currentv < nextv) {
                result -= currentv;
            } else {
                result += currentv;
            }
        }
        return result;
    }
  
    function arabicToRoman(arabicNumber) {
        const romanns = [
            { v: 1000, n: 'M' },
            { v: 900, n: 'CM' },
            { v: 500, n: 'D' },
            { v: 400, n: 'CD' },
            { v: 100, n: 'C' },
            { v: 90, n: 'XC' },
            { v: 50, n: 'L' },
            { v: 40, n: 'XL' },
            { v: 10, n: 'X' },
            { v: 9, n: 'IX' },
            { v: 5, n: 'V' },
            { v: 4, n: 'IV' },
            { v: 1, n: 'I' }
        ];
  
        let result = '';
        for (const n of romanns) {
            while (arabicNumber >= n.v) {
                result += n.n;
                arabicNumber -= n.v;
            }
        }
        return result;
    }
  
    const isAR = /^[1234567890]+$/.test(input);
    let convertedNumber = isAR ? parseInt(input) : romanToArabic(input);
  
    if (!isNaN(convertedNumber)) {
      return isAR
        ? `${arabicToRoman(convertedNumber)}`
        : romanToArabic(input);
    }
}