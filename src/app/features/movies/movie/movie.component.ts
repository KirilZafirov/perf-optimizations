import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Movie } from '../models/movies';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.scss', 
})
export class MovieComponent {
  @Input() movie!: Movie;
  @Output() public readonly deleteMovie = new EventEmitter<number>();
  @Output() public readonly changeMovie = new EventEmitter<Movie>();
  
  getResult(id: number): number {
    return this.fibonacci(id);
  }


  fibonacci(num: number): number {
    console.log('executes fibonacci')
    if (num <= 1) return 1;
    return this.fibonacci(num - 1) + this.fibonacci(num - 2);
  }


  fibonacciWithMemoization(num: number): number {
    console.log('executes fibonacciWithMemoization')
    const memo = [0, 1];
    const fibonacci = (num: number): number => {
      if (memo[num] != null) return memo[num];
      return (memo[num] = fibonacci(num - 1) + fibonacci(num - 2));
    };
    return fibonacci(num);
  }
}
