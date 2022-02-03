const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    // write your solution here
    let str = '';
    const morseKeys = {
        '00': '',
        '10': '.',
        '11': '-'
    };

    for (let i = 0; i < expr.length; i += 10) {
        let leter = expr.slice(i, i + 10);
        if (leter[0] === '*') {
            leter = ' ';
        } else {
            let leterMorse = '';
            for (let i = 0; i < leter.length; i += 2) {
                let morseSymb = leter.slice(i, i + 2);
                leterMorse += morseKeys[morseSymb];
            }
            leter = MORSE_TABLE[leterMorse];
        }
        str += leter;
    }
    return str;
}

module.exports = {
    decode
}