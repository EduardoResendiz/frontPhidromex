import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarModalPage } from './registrar-modal.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarModalPageRoutingModule {}
