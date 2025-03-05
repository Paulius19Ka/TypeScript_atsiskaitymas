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
    const output: HTMLDivElement | null = document.querySelector('#output');
    // A condition to print an error message in case the Div Element does not exist
    if(!output){
        throw new Error(`The element widh id '#output' does not exist in the html file`);
    }
    // Loop through the NBA league
    data.teams.forEach((team: NBA_Team) => {
        // Create a div element for the team card, add class '.teamCard'
        const teamCard: HTMLDivElement = document.createElement('div');
        teamCard.classList.add('teamCard');
        // Create a heading to display team name
        const teamName: HTMLHeadingElement = document.createElement('h3');
        teamName.textContent = team.name;
        // Append the heading to the team card
        teamCard.appendChild(teamName);
        // Loop through the players within each NBA team
        team.players.forEach((player: Player) => {
            // Create a div element for the player mini card for each player, add class '.playerCard'
            const playerCard: HTMLDivElement = document.createElement('div');
            playerCard.classList.add('playerCard');
            // Create a span element to place player names in, join first and last name into one string and assign it to the element's text content
            const playerName: HTMLSpanElement = document.createElement('span');
            playerName.textContent = player.firstName.concat(' ', player.lastName);
            // Create a link element to add links to search for more info about each player, add atrributes to handle the link/open link in new tab
            const playerInfo: HTMLAnchorElement = document.createElement('a');
            playerInfo.textContent = 'More info';
            playerInfo.setAttribute('href', `${player.googleSearch}`);
            playerInfo.setAttribute('target', '_blank');
            // Append the player's full name and info link to the player card
            playerCard.append(playerName, playerInfo);
            // Append the player card to the team card
            teamCard.appendChild(playerCard)
        })
        // Append the team card to the output div
        output.appendChild(teamCard);
    })
});