/* ------------------------------ TASK 7 -----------------------------------
Parašykite TS kodą, vartotojui atėjus į tinklapį kreipsis į NBA.json failą ir iš jo atvaizduos visas NBA komandas ir jų žaidėjus. 
Kiekviena komanda turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas komandos pavadinimas ir papildomose "mini kortelėse" išvardinti žaidėjai su vardais, pavardėmis ir nuoroda į daugiau informacijos apie juos.

Pastaba: Informacija apie komandas bei žaidėjus turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */
type Player = {
    firstName: string,
    lastName: string,
    googleSearch: string
}
type NBA_Team = {
    id: number,
    name: string,
    players: Player[]
}
type NBA = {
    teams: NBA_Team[]
}

const ENDPOINT: string = 'NBA.json';

fetch(ENDPOINT)
.then(res => res.json())
.then((data: NBA) => {
    // console.log(data);
    // console.log(data.teams[0]);
    const output: HTMLDivElement | null = document.querySelector('#output');

    if(!output){
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
            teamCard.appendChild(playerCard)
        })
        output.appendChild(teamCard);
    })
});