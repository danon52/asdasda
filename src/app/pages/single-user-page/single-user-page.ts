import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-user-page',
  imports: [],
  templateUrl: './single-user-page.html',
  styleUrl: './single-user-page.css',
})
export class SingleUserPage {
  route = inject(ActivatedRoute);

  userId = this.route.snapshot.paramMap.get('id');
}
