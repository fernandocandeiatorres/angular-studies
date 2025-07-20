import {
  Component,
  computed,
  EventEmitter,
  input,
  output,
  Output,
} from '@angular/core';
import { Card } from '../shared/card/card';

type UserType = {
  id: string;
  avatar: string;
  name: string;
};

@Component({
  selector: 'app-user',
  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  select = output<string>();
  user = input<UserType>();
  selected = input<boolean>();

  imagePath = computed(() => {
    return 'assets/' + this.user()!.avatar;
  });

  onSelectUser() {
    this.select.emit(this.user()!.id);
  }
}
