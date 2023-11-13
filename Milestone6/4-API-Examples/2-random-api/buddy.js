const loadBuddies = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => displayBuddies(data))
}

const displayBuddies = data => {
    const buddiesContainer = document.getElementById('buddies');
    const buddies = data.results; //result array of object access kortesi.
    for(const buddy of buddies){
        console.log(buddy.email);
        const p = document.createElement('p');
        p.innerText = `name = ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}   =>> Email = ${buddy.email}`
        buddiesContainer.appendChild(p);
    }
}
loadBuddies();