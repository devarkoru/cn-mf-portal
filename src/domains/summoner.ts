export interface Summoner {    
    leagueId: string,
    summonerId: string,
    summonerName: string,
    queueType: string,
    tier: string,
    rank: string,
    leaguePoints: number,
    wins: number,
    losses: number,
    hotStreak: boolean,
    veteran: boolean,
    freshBlood: boolean,
    inactive: boolean,
    miniSeries: MiniSeriesDTO[]
}

export interface MiniSeriesDTO {
    losses: number,
    progress: string,
    target: number,
    wins: number
}