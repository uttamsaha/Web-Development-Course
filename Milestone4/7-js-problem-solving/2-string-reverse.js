function stringReverse(text) {
    let reverse = '';
    for(const letter of text) {
        reverse = letter + reverse;
    }
    return reverse;
}

const greeting = 'Hello, how are you?';
const reversed = stringReverse(greeting);
console.log(reversed);