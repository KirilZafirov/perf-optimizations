import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Movie } from '../models/movies';
import { NgOptimizedImage } from '@angular/common';
import { FibonacciPipe } from './fibbonaci.pipe';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [RouterLink, NgOptimizedImage , FibonacciPipe],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss', 
  changeDetection: ChangeDetectionStrategy.OnPush, 
})
export class MovieComponent {
  @Input() movie!: Movie;
  @Output() public readonly deleteMovie = new EventEmitter<number>();
  @Output() public readonly changeMovie = new EventEmitter<Movie>(); 
}
