import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab2Category1ContentPageRoutingModule } from './tab2-category1-content-routing.module';

import { Tab2Category1ContentPage } from './tab2-category1-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab2Category1ContentPageRoutingModule
  ],
  declarations: [Tab2Category1ContentPage]
})
export class Tab2Category1ContentPageModule {}
