import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {TaskService, Task} from '../../shared/task.service';
import {FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {switchMap, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-task-editor',
  templateUrl: './task-editor.component.html',
  styleUrls: ['./task-editor.component.css']
})
export class TaskEditorComponent implements OnInit, OnDestroy {

  @Input() public editMode: boolean;
  @Input() public task: Task;

  textTaskControl: FormControl;
  unsubNotifier = new Subject();

  constructor(
    public taskService: TaskService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    if (this.editMode === true) {
      this.taskService.task$.subscribe( task => {
        this.task = task;
      });
      // for changes in edit task id
      this.textTaskControl = new FormControl(this.task.text);
      this.route.paramMap.pipe(
        switchMap(params => params.getAll('id')),
        takeUntil(this.unsubNotifier)
      ).subscribe(id => {
          this.taskService.setCurrentTaskById(id);
          // console.log(id);
          const inputValue = this.task.text;
          this.textTaskControl = new FormControl(inputValue);
      });
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
    this.unsubNotifier.next();
    this.unsubNotifier.complete();
  }
}
