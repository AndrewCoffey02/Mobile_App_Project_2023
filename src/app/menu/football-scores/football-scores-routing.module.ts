import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FootballScoresPage } from './football-scores.page';

const routes: Routes = [
  {
    path: '',
    component: FootballScoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FootballScoresPageRoutingModule {}
