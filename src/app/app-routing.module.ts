import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { TodolistComponent } from './todolist/todolist.component';
import { UpdateItemComponent } from './update-item/update-item.component';

const routes: Routes = [
  {path : 'home' , component : TodolistComponent},
  {path : 'addTask' , component : AddItemComponent},
  {path : 'update/:id' , component : UpdateItemComponent},
  {path : '**' , component : TodolistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
