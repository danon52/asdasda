import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-collapse',
  imports: [],
  templateUrl: './collapse.html',
  styleUrl: './collapse.css',
})
export class Collapse {
  show = signal(false);

  title = input.required();
  text = input.required();

  toggleCollapse() {
    this.show.update((prev) => !prev);
  }
}
