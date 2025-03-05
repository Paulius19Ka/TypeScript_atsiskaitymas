import PlayersModal from "./modules/PlayersModal.js";
const TEAMS_ENDPOINT = 'teams.json';
const PLAYERS_ENDPOINT = 'players.json';
fetch(TEAMS_ENDPOINT)
    .then(res => res.json())
    .then((data) => {
    const output = document.querySelector('#output');
    if (!output) {
        throw new Error(`The element widh id '#output' does not exist in the html file`);
    }
    data.teams.forEach((team) => {
        const teamCard = document.createElement('div');
        teamCard.classList.add('teamCard');
        const teamName = document.createElement('h3');
        teamName.textContent = team.teamName;
        const shortName = document.createElement('span');
        shortName.textContent = `Short Name: ${team.simpleName}`;
        const abbreviation = document.createElement('span');
        abbreviation.textContent = `Abbreviation: ${team.abbreviation}`;
        const location = document.createElement('span');
        location.textContent = `Location: ${team.location}`;
        const playersBtn = document.createElement('button');
        playersBtn.textContent = 'Players';
        playersBtn.addEventListener('click', () => {
            const playersModal = new PlayersModal(team.id, team.teamName, PLAYERS_ENDPOINT);
            playersModal.createModal();
        });
        teamCard.append(teamName, shortName, abbreviation, location, playersBtn);
        output.appendChild(teamCard);
    });
});
