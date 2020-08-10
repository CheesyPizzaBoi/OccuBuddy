import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab1Card2ContentPageRoutingModule } from './tab1-card2-content-routing.module';

import { Tab1Card2ContentPage } from './tab1-card2-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab1Card2ContentPageRoutingModule
  ],
  declarations: [Tab1Card2ContentPage]
})
export class Tab1Card2ContentPageModule {}
