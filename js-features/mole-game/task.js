const numberOfDeaths = document.getElementById('dead');
const numberOfLost = document.getElementById('lost');

const holeGame = document.querySelector('.hole-game');
holeGame.addEventListener('click', (event) => {
    const hole = event.target;
    if (hole.classList.contains('hole_has-mole')) {
        numberOfDeaths.innerText++;
    } else {
        numberOfLost.innerText++;
    }
    if(numberOfDeaths.innerText == 9) {
        alert ('Победа')
        numberOfDeaths.innerText = 0;
        numberOfLost.innerText = 0;
    }
    if(numberOfLost.innerText == 5) {
        alert ('Игра проиграна')
        numberOfDeaths.innerText = 0;
        numberOfLost.innerText = 0;
    }
});