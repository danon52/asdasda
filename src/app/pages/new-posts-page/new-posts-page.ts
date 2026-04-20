import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-new-posts-page',
  imports: [RouterLink, Footer],
  templateUrl: './new-posts-page.html',
  styleUrl: './new-posts-page.css',
})
export class NewPostsPage {}
