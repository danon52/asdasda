import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Consoler } from '../../directives/consoler';

@Component({
  selector: 'app-single-user-page',
  imports: [Consoler],
  templateUrl: './single-user-page.html',
  styleUrl: './single-user-page.css',
})
export class SingleUserPage {
  route = inject(ActivatedRoute);

  userId = this.route.snapshot.paramMap.get('id');

  show = signal(false);
}
