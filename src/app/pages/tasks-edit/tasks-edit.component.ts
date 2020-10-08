import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TaskService} from '../../task.service';

@Component({
  selector: 'app-tasks-edit',
  templateUrl: './tasks-edit.component.html',
  styleUrls: ['./tasks-edit.component.css']
})
export class TasksEditComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.taskService.setCurrentTaskById(this.route.snapshot.params.id);
  }

}
