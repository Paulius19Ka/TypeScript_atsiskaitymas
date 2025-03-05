class PlayersModal {
    constructor(teamID, teamName) {
        this.teamID = teamID;
        this.teamName = teamName;
        this.dialog = this.render();
    }
    render() {
        const dialog = document.createElement('dialog');
        const teamName = document.createElement('h3');
        teamName.textContent = `${this.teamName}`;
        dialog.append(teamName);
        return dialog;
    }
    create() {
        document.body.appendChild(this.dialog);
        this.dialog.showModal();
    }
    remove() {
        this.dialog.remove();
    }
}
export default PlayersModal;
