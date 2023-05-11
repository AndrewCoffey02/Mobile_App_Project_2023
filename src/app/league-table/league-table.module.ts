import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LeagueTablePageRoutingModule } from './league-table-routing.module';

import { LeagueTablePage } from './league-table.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeagueTablePageRoutingModule
  ],
  declarations: [LeagueTablePage]
})
export class LeagueTablePageModule {}
