import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter } from './components/counter/counter';
import { Collapse } from './components/collapse/collapse';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Counter, Collapse],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('angular36-26');
}
