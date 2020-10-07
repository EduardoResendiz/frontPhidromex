import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NominacionUpdatePageRoutingModule } from './nominacion-update-routing.module';

import { NominacionUpdatePage } from './nominacion-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NominacionUpdatePageRoutingModule
  ],
  declarations: [NominacionUpdatePage]
})
export class NominacionUpdatePageModule {}
