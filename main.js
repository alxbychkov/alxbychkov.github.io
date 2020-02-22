var string = 'Привет мир!',
    step = 3;

// закодировали массив
function encodeArray(array, step) {
    var newArray = [];
    for (let i = 0; i < array.length; i++) {
        i + step + 1 <= array.length ? newArray[i] = array[i + step] : newArray[i] = array[i + step - array.length];
    }
    return newArray;
};

function encodeString(string, step) {
    var alphabet = [
        'а', 'б', 'в', 'г', 'д', 'е',
        'ё', 'ж', 'з', 'и', 'й', 'к',
        'л', 'м', 'н', 'о', 'п', 'р',
        'с', 'т', 'у', 'ф', 'х', 'ц',
        'ч', 'ш', 'щ', 'ъ', 'ы', 'ь',
        'э', 'ю', 'я'
    ],
        encryptAlphabet = encodeArray(alphabet, step),
        newString = '';

    //кодируем строчку
    for (let i = 0; i < string.length; i++) {
        var isInArray = false;
        for (let j = 0; j < alphabet.length; j++) {
            if (string[i].toLowerCase() == alphabet[j]) {
                string[i] == string[i].toLowerCase() ? newString += encryptAlphabet[j] : newString += encryptAlphabet[j].toUpperCase();
                isInArray = true;
                break;
            }
        }
        !isInArray ? newString += string[i] : '';
    }
    return newString;
};

console.log(string);
console.log(encodeString(string, step));
