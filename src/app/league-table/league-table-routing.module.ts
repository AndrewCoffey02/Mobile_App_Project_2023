import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LeagueTablePage } from './league-table.page';

const routes: Routes = [
  {
    path: '',
    component: LeagueTablePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LeagueTablePageRoutingModule {}
