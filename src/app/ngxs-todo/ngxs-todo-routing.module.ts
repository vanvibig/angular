import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NgxsTodoComponent } from './ngxs-todo.component';

const routes: Routes = [{ path: '', pathMatch: 'full', component: NgxsTodoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgxsTodoRoutingModule { }
