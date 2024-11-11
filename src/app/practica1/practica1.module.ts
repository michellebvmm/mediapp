import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Practica1PageRoutingModule } from './practica1-routing.module';

import { Practica1Page } from './practica1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Practica1PageRoutingModule
  ],
  declarations: [Practica1Page]
})
export class Practica1PageModule {}
