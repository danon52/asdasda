import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Counter } from "../../components/counter/counter";
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-home-page',
  imports: [RouterLink, Counter, Footer],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePAge {}
