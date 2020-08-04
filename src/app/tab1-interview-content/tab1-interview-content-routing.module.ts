import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab1InterviewContentPage } from './tab1-interview-content.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1InterviewContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab1InterviewContentPageRoutingModule {}
