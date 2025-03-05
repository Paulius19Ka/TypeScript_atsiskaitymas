class PlayersModal{
    dialog: HTMLDialogElement;
    teamID: number;
    teamName: string;
    constructor(teamID: number, teamName: string){
        this.teamID = teamID;
        this.teamName = teamName;
        this.dialog = this.render();
    }
    render(): HTMLDialogElement{
        const dialog: HTMLDialogElement = document.createElement('dialog');
        const teamName = document.createElement('h3');
        teamName.textContent = `${this.teamName}`;
        dialog.append(teamName);
        return dialog;
    }
    create(): void{
        document.body.appendChild(this.dialog);
        this.dialog.showModal();
    }
    remove(): void{
        this.dialog.remove();
    }
}
export default PlayersModal;