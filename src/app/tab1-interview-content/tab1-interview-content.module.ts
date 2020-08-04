import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab1InterviewContentPageRoutingModule } from './tab1-interview-content-routing.module';

import { Tab1InterviewContentPage } from './tab1-interview-content.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab1InterviewContentPageRoutingModule
  ],
  declarations: [Tab1InterviewContentPage]
})
export class Tab1InterviewContentPageModule {}
