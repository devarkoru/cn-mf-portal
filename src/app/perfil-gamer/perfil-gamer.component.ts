import { Component, OnInit } from '@angular/core';
import { Summoner } from 'src/domains/summoner';
import { SummonerApi } from 'twisted/dist/apis/lol/summoner/summoner';
import { LolApiService } from '../services/lol-api.service';

@Component({
  selector: 'cn-perfil-gamer',
  templateUrl: './perfil-gamer.component.html',
  styleUrls: ['./perfil-gamer.component.css']
})
export class PerfilGamerComponent implements OnInit {

  loading: boolean = false;
  errorMessage: any;

  summonerData: Summoner[] = [];

  constructor(public lolApi: LolApiService) { }



  ngOnInit(): void {
    this.getSummoner();


  }

  getSummoner() {
    this.loading = true;
    this.errorMessage = "";

    this.lolApi.getSummonerInfo().subscribe(
      (response:Summoner[]) => 
      {                           //next() callback
      this.summonerData = response;
      console.log("summoner:: "+ JSON.stringify(this.summonerData));
      console.log(this.summonerData[0]);
      console.log(this.summonerData[1]);
    })
  }

}
