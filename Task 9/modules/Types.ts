export type Player = {
    id: number,
    teamId: number,
    firstName: string,
    lastName: string
}

export type NBA_Team = {
    id: number,
    abbreviation: string,
    teamName: string,
    simpleName: string,
    location: string
}

export type NBA = {
    teams: NBA_Team[]
}

export type NBA_Players = {
    players: Player[]
}