var player = null;

var selectedPlayer = document.getElementById('player-selected')

changePlayer('X')

function selectSquare(id) {
    var square = document.getElementById(id);
    square.innerHTML = player;
    square.style.color = '#000';
}

function changePlayer(value) {
    player = value;
    selectedPlayer.innerHTML = player;
}