import { ChangeDetectionStrategy, Component, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router'; 
import { Movie } from '../models/movies';
import { MOVIE_LIST } from '../services/movies.service';

@Component({
  selector: 'app-movie-detail-page',
  templateUrl: './movie-detail-page.component.html',
  styleUrl: './movie-detail-page.component.scss', 
})
export class MovieDetailPageComponent {
  movie!: Movie;
  @Input({
    transform: (movieId: string) => MOVIE_LIST.find(movie => movie.id === parseInt(movieId))
  })
  set id(movie: Movie) {
    this.movie = movie;
  } 
}
