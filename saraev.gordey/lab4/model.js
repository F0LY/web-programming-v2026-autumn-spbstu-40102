export class Movie {
  constructor(title, director) {
    this.title = title;
    this.director = director;
    this.actors = [];
  }

  addActor(name) {
    this.actors.push(name);
  }

  removeActor(name) {
    this.actors = this.actors.filter((actor) => actor !== name);
  }

  get castSize() {
    return this.actors.length;
  }
}

export function groupMoviesByDirector(movies) {
  return movies.reduce((acc, movie) => {
    (acc[movie.director] = acc[movie.director] || []).push(movie);
    return acc;
  }, {});
}

export function getUniqueActors(movies) {
  return [...new Set(movies.flatMap((movie) => movie.actors))];
}

export function groupMoviesByCastSize(movies) {
  const result = {};

  for (const movie of movies) {
    const size = movie.castSize;
    const key = String(size);

    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(movie);
  }

  return result;
}

export function getMoviesByActor(movies, actorName) {
  return movies.filter((movie) => movie.actors.includes(actorName));
}

export function getAllTitles(movies) {
  return movies.map((movie) => movie.title);
}
