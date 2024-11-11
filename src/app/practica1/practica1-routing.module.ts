import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Practica1Page } from './practica1.page';

const routes: Routes = [
  {
    path: '',
    component: Practica1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Practica1PageRoutingModule {}
