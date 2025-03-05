"use strict";
const ENDPOINT = 'NBA.json';
fetch(ENDPOINT)
    .then(res => res.json())
    .then((data) => {
    const output = document.querySelector('#output');
    if (!output) {
        throw new Error('The element widh id output does not exist in the html file');
    }
    data.teams.forEach((team) => {
        const teamCard = document.createElement('div');
        teamCard.classList.add('teamCard');
        const teamName = document.createElement('h3');
        teamName.textContent = team.name;
        teamCard.appendChild(teamName);
        team.players.forEach(player => {
            const playerCard = document.createElement('div');
            playerCard.classList.add('playerCard');
            const playerName = document.createElement('span');
            playerName.textContent = player.firstName.concat(' ', player.lastName);
            playerCard.append(playerName);
            teamCard.appendChild(playerCard);
        });
        output.appendChild(teamCard);
    });
});
