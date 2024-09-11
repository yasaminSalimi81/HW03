// write your func here
function pali(word) {
    if ((word.split("").reverse().join("")) == word) {
        return true;
    } else return false;
}
const words = pali('racecar');
console.log(words);
