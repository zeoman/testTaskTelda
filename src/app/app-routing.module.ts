import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TasksComponent} from './pages/tasks/tasks.component';
import {TasksNewComponent} from './pages/tasks-new/tasks-new.component';
import {TasksEditComponent} from './pages/tasks-edit/tasks-edit.component';


const routes: Routes = [
  {path: 'tasks', component: TasksComponent },
  {path: 'tasks/new', component: TasksNewComponent},
  {path: 'tasks/:id', component: TasksEditComponent},
  {path: '**', redirectTo: 'tasks', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
