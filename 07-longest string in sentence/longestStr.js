function longestStr(sentence) {
    const separate = sentence.split(" ");
    let longest = "";
    for( let i = 0 ; i < separate.length ; i++ ) {
        if( longest.length < separate[i].length ) {
            longest = separate[i];
        };
    }
    return longest;
};
const sentence = "i am yasamin salimi";
console.log(longestStr(sentence));
