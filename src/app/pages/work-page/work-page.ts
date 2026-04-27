import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Posts } from "../../components/posts/posts";

@Component({
  selector: 'app-work-page',
  imports: [RouterLink, Posts, RouterOutlet],
  templateUrl: './work-page.html',
  styleUrl: './work-page.css',
})
export class WorkPage {}
