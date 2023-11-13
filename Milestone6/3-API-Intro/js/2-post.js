//loads 100 post dynamic using API
function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => displayPosts(data))
}

function displayPosts(posts){
    // console.log(posts);
    const postContainer = document.getElementById('posts');
    for(const post of posts){
        const div = document.createElement('div');
        // div.setAttribute('class','post');
        div.classList.add('post');
        div.innerHTML = `
        <h3> ${post.title}</h3>
        <p> ${post.body} </p>
        `
        postContainer.appendChild(div);
    }
}
loadPosts();