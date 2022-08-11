module.exports = function toReadable(num) {
    const toNineteen = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        0: ' ',
    };

    const decades = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    };

    let result = '';

    if (num === 0) {
        result = 'zero';
    }
    if (num / 100 >= 1) {
        result = `${result}${toNineteen[Math.floor(num / 100)]} hundred`;
    }

    let decimal = num % 100;

    if (decimal >= 20) {
        result = `${result} ${decades[Math.floor(decimal / 10)]}`;
        decimal = decimal % 10;
    }
    
    result = `${result} ${toNineteen[decimal]}`;

    return result.trim();

};