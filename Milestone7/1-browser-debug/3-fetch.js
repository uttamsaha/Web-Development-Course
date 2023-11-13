console.log(111);
console.log(222);
//setTimeout to fetch
// setTimeout( () => {
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))},1)
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
console.log(333);

for(let i = 0; i < 1000; i++){
    console.log(i);
}