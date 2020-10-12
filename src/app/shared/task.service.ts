import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private taskSubject = new BehaviorSubject<Task>({id: '', text: '', completed: false});
  task$: Observable<Task> = this.taskSubject.asObservable();

  tasks: Task[] = [
    {
      id: '123',
      text: 'Купить продукты',
      completed: false
    },
    {
      id: '321',
      text: 'Выполнить тестовое задание',
      completed: false
    }
  ];

  constructor() {
  }

  addTask(taskText: string) {
    if (taskText !== '') {
      this.tasks.push({id: new Date().valueOf().toString(), text: taskText, completed: false}); // almost unique id
    }
    console.log(this.tasks);
  }

  editTask(taskId: string, taskText: string) {
    if (taskText !== '') {
      const taskIndex = this.tasks.findIndex(task => task.id === taskId);
      if (taskIndex >= 0) {
        this.tasks[taskIndex].text = taskText;
      }
    }
  }

  deleteTask(taskId: string) {
    const taskIndex = this.tasks.findIndex(task => task.id === taskId);

    if (taskIndex >= 0) {
      this.tasks.splice(taskIndex, 1);
    }
  }

  setCurrentTaskById(taskId: string): void {
    const taskIndex = this.tasks.findIndex(task => task.id === taskId);

    if (taskIndex >= 0) {
      this.taskSubject.next(this.tasks[taskIndex]);
    }
  }

  toggleTaskCompleted(taskId: string): void {
    // console.log('clicked');
    const taskIndex = this.tasks.findIndex(task => task.id === taskId);

    if (taskIndex >= 0) {
      this.tasks[taskIndex].completed = !this.tasks[taskIndex].completed;
    }
  }
}
