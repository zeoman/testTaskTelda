import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { TasksNewComponent } from './pages/tasks-new/tasks-new.component';
import { TasksEditComponent } from './pages/tasks-edit/tasks-edit.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TaskEditorComponent } from './components/task-editor/task-editor.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TasksNewComponent,
    TasksEditComponent,
    TasksListComponent,
    TaskEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
