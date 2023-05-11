import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
stories:any[]=[];
  constructor(private NavCtrl: NavController) {}
  
  async openFixtures() {
    await this.NavCtrl.navigateForward('/football-scores');
  }
  async openResults() {
    await this.NavCtrl.navigateForward('/results');
  }
  async openLeague() {
    await this.NavCtrl.navigateForward('/league-table');
  }
}
