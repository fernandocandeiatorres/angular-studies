import { Component, inject, input, output } from '@angular/core';
import { TaskType } from '../task.model';
import { Card } from '../../shared/card/card';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [Card, DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  task = input<TaskType>();

  tasksService = inject(TasksService);

  onCompleteTask() {
    const currentTask = this.task();
    if (currentTask) {
      this.tasksService.removeTask(currentTask.id);
    }
  }
}
