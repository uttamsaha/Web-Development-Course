const loadSingleUser = () => {
    fetch('https://randomuser.me/api/')
    .then(response => response.json())
    .then(data => displaySingleUser(data.results[0]))
}

loadSingleUser();

const displaySingleUser = user => {
    console.log(user);
}