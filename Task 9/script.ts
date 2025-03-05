/* ------------------------------ TASK 9 -----------------------------------
Parašykite TS kodą, vartotojui atėjus į tinklapį kreipsis į NBA.json failą ir iš jo atvaizduos visas NBA komandas. 
Kiekviena komanda turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas komandos: pilnas pavadinimas, paprastas pavadinimas, trumpinys, lokacija ir mygtukas "Players", kurį paspaudus bus kreipiamasi į players.json ir atidaromas modalas su visais TOS komandos žaidėjais.

Pastaba: Informacija apie komandas bei žaidėjus turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */
import PlayersModal from "./modules/PlayersModal.js"
import { NBA, NBA_Team } from "./modules/Types.js";

const TEAMS_ENDPOINT: string = 'teams.json';
const PLAYERS_ENDPOINT: string = 'players.json';

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
        // Create span elements to display other properties (abbr, short name, location) and a button
        const shortName: HTMLSpanElement = document.createElement('span');
        shortName.textContent = `Short Name: ${team.simpleName}`;
        const abbreviation: HTMLSpanElement = document.createElement('span');
        abbreviation.textContent = `Abbreviation: ${team.abbreviation}`;
        const location: HTMLSpanElement = document.createElement('span');
        location.textContent = `Location: ${team.location}`;
        const playersBtn: HTMLButtonElement = document.createElement('button');
        playersBtn.textContent = 'Players';
        // Add event listener to the button, that occurs on click of said button
        playersBtn.addEventListener('click', () => {
            // Call a Class to create a modal, when the button is clicked, use the 'createModal' method to display it
            const playersModal = new PlayersModal(team.id, team.teamName, PLAYERS_ENDPOINT);
            playersModal.createModal();
            
        })

        // Append the properties to the team card
        teamCard.append(teamName, shortName, abbreviation, location, playersBtn);
        
        // Append the team card to the output div
        output.appendChild(teamCard);
    })
});