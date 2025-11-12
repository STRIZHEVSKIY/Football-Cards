const footballTeam = {
  team: 'Russia',
  year: 1996,
  headCoach: 'Zidan',
  players: [
  {name: 'Liomel Messi',position: 'forward', isCaptain: true},
  {name: 'Cristian Ronaldo',position: 'midfielder', isCaptain: false},      {name: 'Mbappe Onil', position: 'defender', isCaptain: false},
{name: 'Max Vazovskiy', position: 'goalkeeper', isCaptain: false},
{name: 'Max Vazovskiy', position: 'goalkeeper', isCaptain: false}]
};

const team = document.getElementById('team')
const year = document.getElementById('year')
const headCoach = document.getElementById('head-coach')
let cardsContainer = document.getElementById('player-cards')
let btn = document.getElementById('players');

team.innerText = footballTeam.team;
year.innerText = footballTeam.year;
headCoach.innerText = footballTeam.headCoach;


// function addPlayers(position_) {
//   let playersList = position_ === 'all' ? footballTeam.players : footballTeam.players.filter(({position}) => position === position_);

//   cardsContainer.innerHTML = '';

//   playersList.forEach(element => {
//     let playerCard = document.createElement('div');
//     let playerName = document.createElement('h2');
//     let playerPosition = document.createElement('p');

//     playerCard.className = 'player-card';
//     playerName.textContent = element.isCaptain ? '(Captain) ' + element.name : element.name;
//     playerPosition.textContent = 'Position: ' + element.position;

//     playerCard.appendChild(playerName);
//     playerCard.appendChild(playerPosition);
//     cardsContainer.appendChild(playerCard);
//   });
// }

function addPlayers(position_) {
  let playersList = position_ === 'all' ? footballTeam.players : footballTeam.players.filter(({position}) => position === position_);

  return playersList.map(({name, position, isCaptain}) => {
    let namePlayer = isCaptain ? `(Captain) ${name}` : name;
    return `<div class='player-card'>
    <h2>${namePlayer}</h2>
    <p>Position: ${position}</p>
    </div>`
  });
}

addEventListener('DOMContentLoaded', () => cardsContainer.innerHTML = addPlayers('all'));

btn.addEventListener('change', () => cardsContainer.innerHTML = addPlayers(btn.value));



