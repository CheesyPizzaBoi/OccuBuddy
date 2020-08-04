import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab2Category1ContentPage } from './tab2-category1-content.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Category1ContentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab2Category1ContentPageRoutingModule {}
