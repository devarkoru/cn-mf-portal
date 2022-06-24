import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, Observable } from 'rxjs';
import { LOL_CONFIG } from 'src/constants/lol-config';
import { Summoner } from 'src/domains/summoner';
import { RUTAS } from 'src/constants/urls';
import { Personas } from 'src/domains/personas';

const RIOT_API_URL = 'https://la2.api.riotgames.com';

const headerDict = {
  "X-Riot-Token": environment.RIOT_API_DEV_KEY,
}

const requestOptions = {
  headers: new HttpHeaders(headerDict),
};

requestOptions.headers.append('Access-Control-Allow-Origin','*');
requestOptions.headers.append('Access-Control-Allow-Headers','X-RIOT-TOKEN')

@Injectable({
  providedIn: 'root'
})
export class LolApiService {

  constructor(private http: HttpClient) { }

  getSummonerInfo(): Observable<Summoner[]> {
    return this.http.get<Summoner[]>(RIOT_API_URL + RUTAS.lolSummoner + environment.summonerEncript
    )

  }
}
