import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMsgComponent } from './add-msg.component'

const routes: Routes = [
  {
    path: '',
    component: AddMsgComponent,
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddMsgRoutingModule { }
