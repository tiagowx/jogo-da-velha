var player = null;
var selectedPlayer = document.getElementById('player-selected');
var squares = document.getElementsByClassName('square');

changePlayer('X')

function selectSquare(id) {
    var square = document.getElementById(id);

    if (square.innerHTML !== '-')
        return;

    square.innerHTML = player;
    square.style.color = '#000';

    if (player === 'X')
        player = 'O';
    else
        player = 'X';
}

function changePlayer(value) {
    player = value;
    selectedPlayer.innerHTML = player;
}

function checkWin() {

}

function checkSequence() {

}