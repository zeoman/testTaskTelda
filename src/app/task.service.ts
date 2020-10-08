import {Injectable} from '@angular/core';

export interface Task {
  id: string;
  text: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  task: Task;
  tasks: Task[];

  constructor() {
    this.tasks = [
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
      this.task = this.tasks[taskIndex];
    }
  }
  toggleTaskCompleted(taskId: string): void {
    console.log('clicked');
    const taskIndex = this.tasks.findIndex(task => task.id === taskId);

    if (taskIndex >= 0) {
      this.tasks[taskIndex].completed = !this.tasks[taskIndex].completed;
    }
  }
}
