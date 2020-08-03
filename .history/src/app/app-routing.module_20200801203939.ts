import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'calculate',
    loadChildren: () => import('./calculate/calculate.module').then(m => m.CalculateModule)
  },
  {
    path: 'addMSg',
    loadChildren: () => import('./add-msg/add-msg.module').then(m => m.AddMsgModule)
  },
  {
    path: 'showMsg',
    loadChildren: () => import('./show-msg/show-msg.module').then(m => m.ShowMsgModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
