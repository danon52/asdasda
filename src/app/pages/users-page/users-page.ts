import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-users-page',
  imports: [],
  templateUrl: './users-page.html',
  styleUrl: './users-page.css',
})
export class UsersPage {
  users = signal([
    { id: 1, name: 'Ivan Serikov', age: 28 },
    { id: 2, name: 'Alexander Ivanov', age: 32 },
    { id: 3, name: 'Dmitry Petrov', age: 25 },
  ]);
}
