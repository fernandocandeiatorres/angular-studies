import { Component, inject, input, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { TaskType } from '../task.model';
import { TasksService } from '../tasks.service';

export interface TaskCreationDto {
  title: string;
  summary: string;
  dueDate: string;
}

@Component({
  selector: 'app-new-task',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  cancel = output();
  add = output();
  userId = input.required<string>();

  tasksService = inject(TasksService);

  add_task_form = new FormGroup({
    title: new FormControl('', Validators.required),
    summary: new FormControl(''),
    due_date: new FormControl(''),
  });

  onSubmit() {
    if (this.add_task_form.valid) {
      const newTask: TaskCreationDto = {
        title: this.add_task_form.value.title!,
        summary: this.add_task_form.value.summary!,
        dueDate: this.add_task_form.value.due_date!,
      };
      this.tasksService.addTask(newTask, this.userId());
      this.add.emit();
    }
  }

  onCancel() {
    this.cancel.emit();
  }
}
