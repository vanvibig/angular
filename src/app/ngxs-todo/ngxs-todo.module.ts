import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { NgxsTodoRoutingModule } from './ngxs-todo-routing.module';
import { NgxsTodoComponent } from './ngxs-todo.component';


@NgModule({
  declarations: [NgxsTodoComponent, ListComponent, FormComponent],
  imports: [
    CommonModule,
    NgxsTodoRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class NgxsTodoModule { }
