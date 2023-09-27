//Peer proramming with Alanna P. and Zach I.
const transpose = require('../transpose');
const wordSearch = (letters, word) => { 
    if (letters.length === 0 || letters[0].length === 0) {
        return "No input";
    }

    let arrLength = letters[0].length;
    for (const arr of letters) {
        if (arr.length !== arrLength) {
            return "Incorrect input";
        }
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) 
        return true;
}

//vertical join:
let verticalJoin = transpose(letters);
verticalJoin = verticalJoin.map(ls => ls.join(''));
console.log(verticalJoin)
    for (l of verticalJoin) {
        if (l.includes(word)) 
        return true;
    }

    return false;
}

module.exports = wordSearch

wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'LARRY')