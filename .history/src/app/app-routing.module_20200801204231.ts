import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'calculate',
    loadChildren: () => import('./calculate/calculate.module').then(m => m.CalculateModule)
  },
  {
    path: 'addMsg',
    loadChildren: () => import('./add-msg/add-msg.module').then(m => m.AddMsgModule)
  },
  {
    path: 'showMsg',
    loadChildren: () => import('./show-msg/show-msg.module').then(m => m.ShowMsgModule)
  },
  {
    path: '',
    redirectTo: 'dashboard',
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
