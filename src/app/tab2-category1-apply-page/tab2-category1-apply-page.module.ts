import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab2Category1ApplyPagePageRoutingModule } from './tab2-category1-apply-page-routing.module';

import { Tab2Category1ApplyPagePage } from './tab2-category1-apply-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab2Category1ApplyPagePageRoutingModule
  ],
  declarations: [Tab2Category1ApplyPagePage]
})
export class Tab2Category1ApplyPagePageModule {}
