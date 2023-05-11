import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FootballScoresPageRoutingModule } from './football-scores-routing.module';

import { FootballScoresPage } from './football-scores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FootballScoresPageRoutingModule
  ],
  declarations: [FootballScoresPage]
})
export class FootballScoresPageModule {}
