import { Component, OnInit } from '@angular/core';
import { FootballApiService } from 'src/app/football-api.service';

@Component({
  selector: 'app-football-scores',
  templateUrl: './football-scores.page.html',
  styleUrls: ['./football-scores.page.scss'],
})
export class FootballScoresPage implements OnInit {

  Stats:any[] = [];

  constructor(private service: FootballApiService) { }

  ngOnInit() {

    this.service.FootballStats().subscribe(
      (data)=>{
        this.Stats = data.FootballScoresPage;
        console.log(data);
      }
    );
  }

}
