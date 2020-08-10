import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab1Card2ContentPage } from './tab1-card2-content.page';

const routes: Routes = [
  {
    path: '',
    component: Tab1Card2ContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab1Card2ContentPageRoutingModule {}
