import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'registrar-modal',
    loadChildren: () => import('./pages/registrar-modal/registrar-modal.module').then( m => m.RegistrarModalPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'nominacion-hidromex',
    loadChildren: () => import('./pages/nominacion-hidromex/nominacion-hidromex.module').then( m => m.NominacionHidromexPageModule)
  },
  {
    path: 'nominacion-model',
    loadChildren: () => import('./pages/nominacion-model/nominacion-model.module').then( m => m.NominacionModelPageModule)
  },
  {
    path: 'nominacion-read',
    loadChildren: () => import('./pages/nominacion-read/nominacion-read.module').then( m => m.NominacionReadPageModule)
  },
  {
    path: 'nominacion-update',
    loadChildren: () => import('./pages/nominacion-update/nominacion-update.module').then( m => m.NominacionUpdatePageModule)
  },
  {
    path: 'subir-docs',
    loadChildren: () => import('./pages/subir-docs/subir-docs.module').then( m => m.SubirDocsPageModule)
  },
  {
    path: 'consultar-docs',
    loadChildren: () => import('./pages/consultar-docs/consultar-docs.module').then( m => m.ConsultarDocsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
