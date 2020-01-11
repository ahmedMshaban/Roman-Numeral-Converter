function convertToRoman(num) {
  const result = [];
  let numerals = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX',
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'L',
    60: 'LX',
    70: 'LXX',
    80: 'LXXX',
    90: 'XC',
    100: 'C',
    200: 'CC',
    300: 'CCC',
    400: 'CD',
    500: 'D',
    600: 'DC',
    700: 'DCC',
    800: 'DCCC',
    900: 'CM',
    1000: 'M'
  };
  if (num <= 10) {
    return numerals[num];
  } else if (num < 100) {
    result.push(numerals[parseInt(num.toString()[0]) * 10]);
    result.push(numerals[parseInt(num.toString()[1])]);
    return result.join('');
  } else if (num < 1000) {
    result.push(numerals[parseInt(num.toString()[0]) * 100]);
    result.push(numerals[parseInt(num.toString()[1]) * 10]);
    result.push(numerals[parseInt(num.toString()[2])]);
    return result.join('');
  } else {
    result.push('M'.repeat(num.toString()[0]));
    result.push(numerals[parseInt(num.toString()[1]) * 100]);
    result.push(numerals[parseInt(num.toString()[2]) * 10]);
    result.push(numerals[parseInt(num.toString()[3])]);
    return result.join('');
  }
}

console.log(convertToRoman(3999));
