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
  const grouped = new Map();

  for (const movie of movies) {
    const key = movie.castSize;
    if (!grouped.has(key)) {
      grouped.set(key, []);
    }
    grouped.get(key).push(movie);
  }

  return Object.fromEntries(grouped);
}

export function getMoviesByActor(movies, actorName) {
  return movies.filter((movie) => movie.actors.includes(actorName));
}

export function getAllTitles(movies) {
  return movies.map((movie) => movie.title);
}
