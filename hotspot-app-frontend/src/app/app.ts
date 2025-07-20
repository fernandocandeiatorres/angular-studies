import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { User } from './user/user';
import { DUMMY_TASKS, DUMMY_USERS } from './data';
import { Tasks } from './tasks/tasks';
import { TaskCreationDto } from './tasks/new-task/new-task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = signal(DUMMY_USERS);
  selectedUserId = signal<string>('');

  tasks = signal(DUMMY_TASKS);

  onSelectUser(id: string) {
    this.selectedUserId.set(id);
  }

  selectedUser = computed(() => {
    return this.users().find((user) => user.id === this.selectedUserId());
  });
}
