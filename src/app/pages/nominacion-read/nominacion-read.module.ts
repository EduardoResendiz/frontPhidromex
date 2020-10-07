import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NominacionReadPageRoutingModule } from './nominacion-read-routing.module';

import { NominacionReadPage } from './nominacion-read.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NominacionReadPageRoutingModule
  ],
  declarations: [NominacionReadPage]
})
export class NominacionReadPageModule {}
