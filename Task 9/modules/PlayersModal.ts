import { NBA_Players, Player } from "./Types";

class PlayersModal{
    dialog: HTMLDialogElement;
    teamID: number;
    teamName: string;
    PLAYERS_ENDPOINT: string;
    constructor(teamID: number, teamName: string, PLAYERS_ENDPOINT: string){
        this.teamID = teamID;
        this.teamName = teamName;
        this.PLAYERS_ENDPOINT = PLAYERS_ENDPOINT;
        this.dialog = this.render();
    }
    render(): HTMLDialogElement{
        // Create a dialog element
        const dialog: HTMLDialogElement = document.createElement('dialog');
        // Create a heading and assign it's text content to the team name
        const teamName: HTMLHeadingElement = document.createElement('h3');
        teamName.textContent = `${this.teamName}`;
        // Create a player card div element
        const playersCard: HTMLDivElement = document.createElement('div');
        // Fetch data from players.json
        fetch(this.PLAYERS_ENDPOINT)
        .then(res => res.json())
        .then((data: NBA_Players) => {
            // Filter the players array by matching the teamId of the team whose modal is open, with the teamId's in the player objects
            const currentTeamPlayers = data.players.filter((player: Player) => player.teamId === this.teamID);
            // Run a loop through the filtered players array
            currentTeamPlayers.forEach((player: Player) => {
                // Create span elements for each player, assign text content as their full name (by combining first and last names into one string with the use of 'concat' method)
                const playerSpan: HTMLSpanElement = document.createElement('span');
                playerSpan.textContent = player.firstName.concat(' ', player.lastName);;
                // Append the player span elements to the player card
                playersCard.append(playerSpan);
            });
        });
        // Create a close button, to be able to close the dialog
        const closeBtn: HTMLButtonElement = document.createElement('button');
        closeBtn.textContent = 'Close';
        // Add an event listener to the close button, which calls the 'removeModal' method from this Class, to remove the dialog
        closeBtn.addEventListener('click', () => this.removeModal())
        // Append the heading, the card and the close button to the dialog
        dialog.append(teamName, playersCard, closeBtn);
        return dialog;
    }
    createModal(): void{
        // Method to append the dialog to body in the HTML file, and display it
        document.body.appendChild(this.dialog);
        this.dialog.showModal();
    }
    removeModal(): void{
        // Method to remove the dialog
        this.dialog.remove();
    }
}
export default PlayersModal;