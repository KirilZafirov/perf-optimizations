import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Movie } from '../models/movies';
import { MOVIE_LIST } from '../services/movies.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-movie-detail-page',
  templateUrl: './movie-detail-page.component.html',
  styleUrl: './movie-detail-page.component.scss', 
  standalone: true,
  imports: [NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class MovieDetailPageComponent {
  movie!: Movie;
  @Input({
    transform: (movieId: string) => MOVIE_LIST.find(movie => movie.id === parseInt(movieId))
  })
  set id(movie: Movie) { 
    this.movie = movie;
  } 
}
