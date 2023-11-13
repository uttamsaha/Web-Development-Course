 /*fetch('https://jsonplaceholder.typicode.com/todos/1') // fetch json file from server / lini
  .then(response => response.json()) //convert JSON to js Object
//   .then(json => console.log(json)) // print object
  .then(json => console.log(json.title)) // print object
*/

function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))
}



function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then (data => console.log(data))
}

function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => displayUsers(data))
}

function displayUsers(data){ //data ta ekhane array of object hisabe astache.
    const ul = document.getElementById('users');
    for(const user of data){
        // console.log(user.name);
        const li = document.createElement('li');
        // li.innerText = user.name;
        li.innerText = `name : ${user.name}, email: ${user.email}`
        ul.appendChild(li);
    }
}
