class PlayersModal {
    constructor(teamID, teamName, PLAYERS_ENDPOINT) {
        this.teamID = teamID;
        this.teamName = teamName;
        this.PLAYERS_ENDPOINT = PLAYERS_ENDPOINT;
        this.dialog = this.render();
    }
    render() {
        const dialog = document.createElement('dialog');
        const teamName = document.createElement('h3');
        teamName.textContent = `${this.teamName} Players:`;
        const playersCard = document.createElement('div');
        fetch(this.PLAYERS_ENDPOINT)
            .then(res => res.json())
            .then((data) => {
            const currentTeamPlayers = data.players.filter((player) => player.teamId === this.teamID);
            currentTeamPlayers.forEach((player) => {
                const playerSpan = document.createElement('span');
                playerSpan.textContent = player.firstName.concat(' ', player.lastName);
                ;
                playersCard.append(playerSpan);
            });
        });
        const closeBtn = document.createElement('button');
        closeBtn.textContent = 'Close';
        closeBtn.addEventListener('click', () => this.removeModal());
        dialog.append(teamName, playersCard, closeBtn);
        return dialog;
    }
    createModal() {
        document.body.appendChild(this.dialog);
        this.dialog.showModal();
    }
    removeModal() {
        this.dialog.remove();
    }
}
export default PlayersModal;
