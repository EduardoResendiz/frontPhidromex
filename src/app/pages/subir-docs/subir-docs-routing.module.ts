import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubirDocsPage } from './subir-docs.page';

const routes: Routes = [
  {
    path: '',
    component: SubirDocsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubirDocsPageRoutingModule {}
