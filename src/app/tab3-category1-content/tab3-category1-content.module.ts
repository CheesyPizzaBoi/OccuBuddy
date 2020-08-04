import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab3Category1ContentPageRoutingModule } from './tab3-category1-content-routing.module';

import { Tab3Category1ContentPage } from './tab3-category1-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab3Category1ContentPageRoutingModule
  ],
  declarations: [Tab3Category1ContentPage]
})
export class Tab3Category1ContentPageModule {}
