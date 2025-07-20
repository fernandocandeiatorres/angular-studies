import {
  Component,
  computed,
  input,
  model,
  output,
  signal,
} from '@angular/core';
import { DUMMY_TASKS } from '../data';
import { Task } from './task/task';
import { NewTask, TaskCreationDto } from './new-task/new-task';
import { TaskType } from './task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  name = input<string>();
  userId = input.required<string>();

  isAddingTask = signal(false);

  constructor(private tasksService: TasksService) {}

  onStartAddTask() {
    this.isAddingTask.set(true);
  }

  onCancelAddTask() {
    this.isAddingTask.set(false);
  }

  selectedUserTasks = computed(() => {
    return this.tasksService.getUserTasks(this.userId());
  });
}
