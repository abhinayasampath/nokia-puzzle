export const messageToLetterMap = new Map([
    ['2', 'a'], ['22', 'b'], ['222', 'c'],
    ['3', 'd'], ['33', 'e'], ['333', 'f'],
    ['4', 'g'], ['44', 'h'], ['444', 'i'],
    ['5', 'j'], ['55', 'k'], ['555', 'l'],
    ['6', 'm'], ['66', 'n'], ['666', 'o'],
    ['7', 'p'], ['77', 'q'], ['777', 'r'],
    ['7777', 's'], ['8', 't'], ['88', 'u'],
    ['888', 'v'], ['9', 'w'], ['99', 'x'],
    ['999', 'y'], ['9999', 'z']
]);

export function convertMessageToLetter(message: string) {
    return messageToLetterMap.get(message) || '';
}

export const convertNumberToString = (message: string) => {
    try {
        let messageArray = message.toString().split(" ");
        let result = "";
        for (let word of messageArray) {
            let wordString = "";
            if (word.length == 1) {
                wordString = convertMessageToLetter(word);
                result = result + wordString + " ";
                wordString = "";
            }
            else {
                let text = "";
                for (let i = 0; i < word.length; i++) {
                    if (i == 0) {
                        text = word[i];
                    } else if (word[i] == '.') {
                        wordString = wordString + convertMessageToLetter(text);
                        text = "";
                    }
                    else if (text.charAt(text.length - 1) != word[i]) {
                        wordString = wordString + convertMessageToLetter(text);
                        text = word[i];
                        if (i == word.length - 1) {
                            wordString = wordString + convertMessageToLetter(text);

                        }
                    }
                    else {
                        text = text + word[i]
                        if (text.charAt(0) != word[i + 1]) {
                            wordString = wordString + convertMessageToLetter(text);
                            text = "";
                        }

                    }

                }
                result = result + wordString + " ";
            }
        }
        return result.trim();


    } catch (error) {
    }
}
export const getKeyByValue = (keyValue: string) => {
    for (const [key, value] of messageToLetterMap.entries()) {
        if (value === keyValue) {
            return key;
        }
    }
    return null; // If value not found
}

export const convertStringToNumber = (message: string) => {
    try {
        let messageArray = message.toString().split(" ");
        let result = "";
        for (let word of messageArray) {
            let wordString = "";
            for (let i = 0; i < word.length; i++) {
                let number = getKeyByValue(word[i])
                if (wordString.charAt(wordString.length - 1) == number.charAt(0)) {
                    wordString = wordString + "." + number;
                } else {
                    wordString = wordString + number;
                }

            }


            result = result + wordString + " ";
        }
        return result.trim();


    } catch (error) {
    }
}
