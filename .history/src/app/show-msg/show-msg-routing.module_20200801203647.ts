import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowMsgComponent } from './show-msg.component'

const routes: Routes = [
  {
    path: '',
    component: ShowMsgComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowMsgRoutingModule { }
