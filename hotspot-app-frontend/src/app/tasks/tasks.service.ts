import { Injectable, signal } from '@angular/core';
import { DUMMY_TASKS } from '../data';
import { TaskCreationDto } from './new-task/new-task';

@Injectable({ providedIn: 'root' })
export class TasksService {
  tasks = signal(DUMMY_TASKS);

  constructor() {
    const tasks = localStorage.getItem('tasks');

    if (tasks) {
      this.tasks.set(JSON.parse(tasks));
    }
  }

  getUserTasks(userId: string) {
    return this.tasks().filter((task) => task.userId === userId);
  }

  addTask(taskData: TaskCreationDto, selectedUserId: string) {
    this.tasks.set([
      ...this.tasks(),
      {
        id: this.tasks().length.toString(),
        userId: selectedUserId,
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.dueDate,
      },
    ]);
    this.saveTasks();
  }

  removeTask(id: string) {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== id));
    this.saveTasks();
  }

  private saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks()));
  }
}
