import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Movie } from '../models/movies';
import { MovieComponent } from '../movie/movie.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieComponent, NgFor],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  @Input() movies!: Movie[];
  @Output() onDeleteMovie = new EventEmitter<number>();
  @Output() onChangeMovie = new EventEmitter<Movie>();
  
}
