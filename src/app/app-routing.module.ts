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
  },
  {
    path: 'tab1-card2-content',
    loadChildren: () => import('./tab1-card2-content/tab1-card2-content.module').then( m => m.Tab1Card2ContentPageModule)
  },
  {
    path: 'tab2-category1-apply-page',
    loadChildren: () => import('./tab2-category1-apply-page/tab2-category1-apply-page.module').then( m => m.Tab2Category1ApplyPagePageModule)
  },
  {
    path: 'tab2-category1-averages',
    loadChildren: () => import('./tab2-category1-averages/tab2-category1-averages.module').then( m => m.Tab2Category1AveragesPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
