function setPlayerStyle(player){
     player.style.border = '1px solid red';
    player.style.borderRadius = '20px';
    player.style.marginBottom = '10px';
}

const players = document.getElementsByClassName('player');
for(const player of players){
    setPlayerStyle(player);
   
}
function addPlayer(){
    const players = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
                <div class="player">
                    <h4 class="player-name">Player</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus fugit debitis nihil odit aperiam eos dolore voluptas recusandae. Placeat enim culpa similique, saepe sapiente consequatur.</p>
                </div>`;

           players.appendChild(player);    
           setPlayerStyle(player); 
}

document.getElementById('players').addEventListener('click', function(event){
    console.log(event.target);
    if(event.target.tagName.toLowerCase() == 'div'){
        event.target.style.backgroundColor = 'yellow';
    }
    else{
        event.target.parentNode.style.backgroundColor = 'yellow';
    }
})
// const x = document.getElementsByClassName('player')[0];
// x.style.backgroundColor = 'red';

// const y = document.querySelector('#players .player:nth-child(1)');
// y.style.backgroundColor = 'orange';