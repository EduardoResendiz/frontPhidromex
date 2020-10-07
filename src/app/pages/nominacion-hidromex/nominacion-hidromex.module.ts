import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NominacionHidromexPageRoutingModule } from './nominacion-hidromex-routing.module';

import { NominacionHidromexPage } from './nominacion-hidromex.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NominacionHidromexPageRoutingModule
  ],
  declarations: [NominacionHidromexPage]
})
export class NominacionHidromexPageModule {}
