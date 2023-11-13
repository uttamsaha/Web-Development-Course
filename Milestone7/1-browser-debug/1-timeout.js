function doSomething() {
    console.log('I am doing something');
}
console.log('I am first');
console.log('I am second');
setTimeout(doSomething, 5000);
console.log('I am third');