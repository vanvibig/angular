import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [{ path: 'ngxs-todo', loadChildren: () => import('./ngxs-todo/ngxs-todo.module').then(m => m.NgxsTodoModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes, )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
