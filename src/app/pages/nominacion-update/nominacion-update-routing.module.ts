import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NominacionUpdatePage } from './nominacion-update.page';

const routes: Routes = [
  {
    path: '',
    component: NominacionUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NominacionUpdatePageRoutingModule {}
