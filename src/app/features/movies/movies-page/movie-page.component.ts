import { ChangeDetectionStrategy, Component, Input, Output, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MovieComponent } from '../movie/movie.component';
import { AsyncPipe, NgFor } from '@angular/common';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MOVIE_LIST, MoviesService } from '../services/movies.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Movie } from '../models/movies';

@Component({
  selector: 'app-movie-page',
  standalone: true,
  imports: [MovieListComponent, NgFor, ReactiveFormsModule, AsyncPipe],
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.scss',
})
export class MoviePageComponent {
  // #fb = inject(FormBuilder);
  #moviesService = inject(MoviesService);
  movies = this.#moviesService.getMovies();
  movieForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  deleteMovie(movieId: number) {
    this.#moviesService.deleteMovie(movieId);
  }

  changeMovie(movie: Movie) {
    this.#moviesService.editMovie(movie);
  }

  addMovie() {
    this.#moviesService.addMovie(this.movieForm.value);
    this.movieForm.reset();
  }
}
