import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab3Category1ContentPage } from './tab3-category1-content.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Category1ContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab3Category1ContentPageRoutingModule {}
