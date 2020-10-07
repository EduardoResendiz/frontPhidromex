import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarModalPageRoutingModule } from './registrar-modal-routing.module';

import { RegistrarModalPage } from './registrar-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarModalPageRoutingModule
  ],
  declarations: [RegistrarModalPage]
})
export class RegistrarModalPageModule {}
