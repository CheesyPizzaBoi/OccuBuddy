import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tab2Category1ApplyPagePage } from './tab2-category1-apply-page.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Category1ApplyPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tab2Category1ApplyPagePageRoutingModule {}
