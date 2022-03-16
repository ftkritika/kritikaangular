import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InsertComponent} from './insert/insert.component';
import {ListComponent} from './list/list.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'insert', component: InsertComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
