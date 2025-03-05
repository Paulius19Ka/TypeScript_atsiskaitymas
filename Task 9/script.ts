/* ------------------------------ TASK 9 -----------------------------------
Parašykite TS kodą, vartotojui atėjus į tinklapį kreipsis į NBA.json failą ir iš jo atvaizduos visas NBA komandas. 
Kiekviena komanda turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas komandos: pilnas pavadinimas, paprastas pavadinimas, trumpinys, lokacija ir mygtukas "Players", kurį paspaudus bus kreipiamasi į players.json ir atidaromas modalas su visais TOS komandos žaidėjais.

Pastaba: Informacija apie komandas bei žaidėjus turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */
import PlayersModal from "./modules/PlayersModal.js"

// type Player = {
//     id: number,
//     teamId: number,
//     firstName: string,
//     lastName: string
// }
type NBA_Team = {
    id: number,
    abbreviation: string,
    teamName: string,
    simpleName: string,
    location: string,
    
}
type NBA = {
    teams: NBA_Team[]
}

const TEAMS_ENDPOINT: string = 'teams.json';
// const PLAYERS_ENDPOINT: string = 'players.json';

fetch(TEAMS_ENDPOINT)
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
        teamName.textContent = team.teamName;

        const shortName: HTMLSpanElement = document.createElement('span');
        shortName.textContent = `Short Name: ${team.simpleName}`;
        const abbreviation: HTMLSpanElement = document.createElement('span');
        abbreviation.textContent = `Abbreviation: ${team.abbreviation}`;
        const location: HTMLSpanElement = document.createElement('span');
        location.textContent = `Location: ${team.location}`;
        const playersBtn: HTMLButtonElement = document.createElement('button');
        playersBtn.textContent = 'Players';

        playersBtn.addEventListener('click', () => {
            console.log(team.abbreviation);
            const playersModal = new PlayersModal(team.id, team.teamName);
            playersModal.create();
            
        })


        // Append the heading to the team card
        teamCard.append(teamName, shortName, abbreviation, location, playersBtn);
        
        // Append the team card to the output div
        output.appendChild(teamCard);
    })
});