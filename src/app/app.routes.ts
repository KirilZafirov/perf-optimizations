import { Routes } from '@angular/router';
import { MoviePageComponent } from './features/movies/movies-page/movie-page.component';
 
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    component: MoviePageComponent,
  },
  {
    path: 'movie/:id',
    loadComponent: () => import('./features/movies/movie-detail-page/movie-detail-page.component'),
  },
  {
    path: 'statistics',
    loadComponent: () => import('./features/statistics/statistics-page/statistics-page.component').then(m => m.StatisticsPageComponent),
  },
];
