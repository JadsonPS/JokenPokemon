const yourScore = document.querySelector('#your-score');
const machineScore = document.querySelector('#machine-score');
const result = document.querySelector('.result');
const handPlayer = document.querySelector('.choice-palyer');
const handComputer = document.querySelector('.choice-com');
/* const playerChar = document.querySelector('#PLAYER'); */
const hpCOM = document.querySelector('#hp-COM'); 
const hpPlayer = document.querySelector('#hp-player');
const xLose = document.querySelector('.lose');

let humanPoint = 0;
let machinePoint = 0;

const playHuman = (choice) => {
    const handPlayer = document.querySelector('.choice-palyer')

   document.querySelector('.choice-container').style = "display:flex;"



    hand(choice, playCOM())


    playTheGame(choice, playCOM())
}


/* COM Choice */
const playCOM = () => {
    const choices = ['rock', 'paper', 'scissors'];
    let machineChoice = Math.floor(Math.random() * (2 - 0 + 1) + 0);
    /* console.log(choices[machineChoice]); */
    return choices[machineChoice]
}

/* Define quem ganha ou perde a partida */
const playTheGame = (human, machine) => {
    if ((human === 'rock' && machine === 'scissors') || (human === 'scissors' && machine === 'paper') || (human === 'paper' && machine === 'rock')) {
        console.log('Você venceu')
        humanPoint++;
        yourScore.innerHTML = humanPoint;
        result.innerHTML = 'Você Ganhou!';
        hpPlayer.style.backgroundColor = 'green'
        hpCOM.style.backgroundColor = 'red'
    } else if (human === machine) {
        console.log('EMPATE')
        result.innerHTML = 'Empatou!';
        hpCOM.style.backgroundColor = 'yellow'
        hpPlayer.style.backgroundColor = 'yellow'
    } else {
        console.log('PERDEUUUUUUU')
        machinePoint++;
        machineScore.innerHTML = machinePoint;
        result.innerHTML = 'Você perdeu!';
        hpPlayer.style.backgroundColor = 'red'
        hpCOM.style.backgroundColor = 'green'
        
        
    }
}



const hand = (player, computer) => {
    switch (player) {
        case 'rock':
            /* handPlayer.innerHTML = '&#x1F44A' */
            handPlayer.innerHTML = ' <img class="hand" src="./img/rock.png"> '
            break;
        case 'paper':
            /* handPlayer.innerHTML = '&#x1F590' */
            handPlayer.innerHTML = '<img class="hand" src="./img/paper.png">'
            break;
        case 'scissors':
            /* handPlayer.innerHTML = '&#x270C' */
            handPlayer.innerHTML = '<img class="hand" src="./img/tesoura.png">'
            break;
        default:
            console.log('deumerrrdaaaaa')
    }

    switch (computer) {
        case 'rock':
            /* handComputer.innerHTML = '&#x1F44A' */
            handComputer.innerHTML = '<img class="hand" src="./img/rock.png">'
            break;
        case 'paper':
            /* handComputer.innerHTML = '&#x1F590' */
            handComputer.innerHTML = '<img class="hand" src="./img/paper.png">'
            break;
        case 'scissors':
            /* handComputer.innerHTML = '&#x270C' */
            handComputer.innerHTML = '<img class="hand" src="./img/tesoura.png">'
            break;
        default:
            console.log('deumerrrdaaaaa')
    }
}