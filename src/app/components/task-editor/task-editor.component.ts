import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {TaskService, Task} from '../../task.service';
import {FormControl} from '@angular/forms';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, tap} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.css']
})
export class TaskEditorComponent implements OnInit, OnDestroy {

  @Input() public editMode: boolean;
  @Input() public task: Task;

  sub: Subscription;

  textTaskControl: FormControl;

  constructor(
    public taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if (this.editMode === true) {
      this.textTaskControl = new FormControl(this.taskService.task.text);
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        tap(() => {
          this.taskService.setCurrentTaskById(this.route.snapshot.params.id);
          const inputValue = this.taskService.task.text;
          this.textTaskControl = new FormControl(inputValue);
        })
      ).subscribe();
    } else {
      this.textTaskControl = new FormControl('');
    }
  }
  addTask(taskText: string): void {
    this.taskService.addTask(taskText);
    this.textTaskControl.setValue('');
  }
  editTask(taskId: string, taskText: string): void {
    this.taskService.editTask(taskId, taskText);
  }
  ngOnDestroy(): void {
    if (!!this.sub) {
      this.sub.unsubscribe();
    }
  }
}
