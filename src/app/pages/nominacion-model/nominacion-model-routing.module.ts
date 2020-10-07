import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NominacionModelPage } from './nominacion-model.page';

const routes: Routes = [
  {
    path: '',
    component: NominacionModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NominacionModelPageRoutingModule {}
