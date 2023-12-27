import { Routes } from '@angular/router';
import { MovieDetailPageComponent } from './features/movies/movie-detail-page/movie-detail-page.component'; 
import { MoviePageComponent } from './features/movies/movies-page/movie-page.component';
import { StatisticsPageComponent } from './features/statistics/statistics-page/statistics-page.component';

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
    component: MovieDetailPageComponent
  },
  {
    path: 'statistics',
    component: StatisticsPageComponent, 
  },
];
