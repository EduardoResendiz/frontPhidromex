import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultarDocsPageRoutingModule } from './consultar-docs-routing.module';

import { ConsultarDocsPage } from './consultar-docs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultarDocsPageRoutingModule
  ],
  declarations: [ConsultarDocsPage]
})
export class ConsultarDocsPageModule {}
