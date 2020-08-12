import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab2Category1AveragesPageRoutingModule } from './tab2-category1-averages-routing.module';

import { Tab2Category1AveragesPage } from './tab2-category1-averages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab2Category1AveragesPageRoutingModule
  ],
  declarations: [Tab2Category1AveragesPage]
})
export class Tab2Category1AveragesPageModule {}
