import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Footer } from "../../components/footer/footer";
import { Data } from '../../services/data';
import { Post } from '../../../types';


@Component({
  selector: 'app-home-page',
  imports: [RouterLink, Footer],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePAge implements OnInit {
 private data = inject(Data)
    
newData = signal<Post[]>([])


}
