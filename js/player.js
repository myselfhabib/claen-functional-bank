function setPlayerStyle(player) {
    player.style.borderRadius = '10px';
    player.style.border = '1px solid red';
    player.style.margin = '10px';
    player.style.padding = '10px';
}
const players = document.getElementsByClassName
    ('player');
for (const player of players) {
    // console.log(player);
    setPlayerStyle(player);


}
function addPlayer() {
    const playersContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <h4 class="player-name">New Player</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam facere possimus accusantium earum
    laborum at omnis sint nam deleniti, ullam velit illum amet! Excepturi autem recusandae repudiandae,
    quo nisi nesciunt!</p>
    `;
    setPlayerStyle(player);
    playersContainer.appendChild(player);

}

document.getElementById('players').addEventListener('click', function (event) {
    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = 'green';
    }
    else {
        event.target.parentNode.style.backgroundColor = 'green';
    }
})