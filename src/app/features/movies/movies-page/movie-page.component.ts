import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgFor, NgOptimizedImage, provideImgixLoader } from '@angular/common';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { MoviesService } from '../services/movies.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Movie } from '../models/movies';
import { toSignal } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-movie-page',
  standalone: true,
  imports: [MovieListComponent, NgFor, ReactiveFormsModule , NgOptimizedImage],
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush, 
  // providers: [
  //   provideImgixLoader("https://imgcinemas.it/wp-content/uploads/2023/11/")
  // ]  
})
export class MoviePageComponent {
 
  #moviesService = inject(MoviesService);
  movies =  toSignal(this.#moviesService.$getMovies());
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
