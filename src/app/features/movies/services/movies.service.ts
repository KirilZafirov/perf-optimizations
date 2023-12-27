import { Injectable } from "@angular/core";
import { Movie } from "../models/movies";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
 
  getMovies(): Movie[] { 
    return MOVIE_LIST;
  }

  getMovieById(movieId: number): Movie | undefined { 
    return MOVIE_LIST.find(movie => movie.id === movieId);
  }

  addMovie(movie: Movie): void { 
    const createMovie = {
      ...movie,
      id: MOVIE_LIST.length + 1,
      rating: Math.floor(Math.random() * 10),
      imageUrl: `https://picsum.photos/seed/${MOVIE_LIST.length}/200/300`,
    } 
    MOVIE_LIST.unshift(createMovie);
  }

  editMovie(movie: Movie): void { 
    const findMovie = MOVIE_LIST.find(m => m.id === movie.id);
    if(findMovie) {
      findMovie.name = `Changed ${movie.name}`;
      findMovie.description = `Changed ${movie.description}`;
    }
  }

  deleteMovie(movieId: number): void { 
    MOVIE_LIST.splice(MOVIE_LIST.findIndex(movie => movie.id === movieId), 1);
  }

}

// generate 100 movies
export const MOVIE_LIST: Movie[] = Array.from({ length: 100 }, (v, k) => k).map(i => ({
  id: i,
  name: `Movie ${i}`,
  title: `Title ${i}`,
  description: `Description ${i}`,
  rating: Math.floor(Math.random() * 10),
  imageUrl: `https://picsum.photos/seed/${i}/200/300`
}));