import { Component, inject, OnInit, signal } from '@angular/core';
import { User } from '../../../types';
import { UserService } from '../../services/user-service';
import { CurrencyPipe, DatePipe, JsonPipe, UpperCasePipe } from '@angular/common';
import { ReversePipe } from '../../pipes/reverse-pipe';

@Component({
  selector: 'app-users-page',
  imports: [UpperCasePipe, DatePipe, CurrencyPipe, JsonPipe, ReversePipe],
  templateUrl: './users-page.html',
  styleUrl: './users-page.css',
})
export class UsersPage implements OnInit {
  private userService = inject(UserService);

  users = signal<User[]>([]);

  date = signal(Date.now());

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users.set(data);
    });
  }
}
