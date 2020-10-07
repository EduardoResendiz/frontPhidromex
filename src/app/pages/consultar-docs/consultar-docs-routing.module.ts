import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultarDocsPage } from './consultar-docs.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultarDocsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultarDocsPageRoutingModule {}
