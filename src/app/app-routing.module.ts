import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tab1-interview-content',
    loadChildren: () => import('./tab1-interview-content/tab1-interview-content.module').then( m => m.Tab1InterviewContentPageModule)
  },
  {
    path: 'tab2-category1-content',
    loadChildren: () => import('./tab2-category1-content/tab2-category1-content.module').then( m => m.Tab2Category1ContentPageModule)
  },
  {
    path: 'tab3-category1-content',
    loadChildren: () => import('./tab3-category1-content/tab3-category1-content.module').then( m => m.Tab3Category1ContentPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
