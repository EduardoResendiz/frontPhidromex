import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NominacionHidromexPage } from './nominacion-hidromex.page';

const routes: Routes = [
  {
    path: '',
    component: NominacionHidromexPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NominacionHidromexPageRoutingModule {}
