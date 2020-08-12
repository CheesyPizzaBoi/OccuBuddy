import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab2Category1AveragesPage } from './tab2-category1-averages.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Category1AveragesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab2Category1AveragesPageRoutingModule {}
