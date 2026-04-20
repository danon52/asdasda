import { Routes } from '@angular/router';
import { IndexPage } from './pages/index-page/index-page';
import { UsersPage } from './pages/users-page/users-page';
import { SingleUserPage } from './pages/single-user-page/single-user-page';
import { HomePAge } from './pages/home-page/home-page';
import { WorkPage } from './pages/work-page/work-page';
import { NewPostsPage } from './pages/new-posts-page/new-posts-page';

export const routes: Routes = [
  { path: '', component: IndexPage },
  { path: 'users', component: UsersPage },
  { path: 'users/:id', component: SingleUserPage },
  {path: 'home' , component: HomePAge} , 
  {path: 'work' , component: WorkPage} , 
  {path: 'news' , component:NewPostsPage }
];
