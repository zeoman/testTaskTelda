import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../shared/task.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  constructor(public taskService: TaskService) { }

  ngOnInit(): void {
  }

  deleteTask(id: string): void {
    this.taskService.deleteTask(id);
  }
  toggleTaskCompleted(id: string): void {
    this.taskService.toggleTaskCompleted(id);
  }
}
