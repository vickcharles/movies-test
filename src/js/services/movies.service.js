export const moviesService = {
  addMovie,
  removeMovie,
  getAllMovies,
  getTop5
};

function addMovie(movie) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(movie)
  };
  return fetch("/movies/add", requestOptions);
}

function removeMovie(id) {
  const requestOptions = {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: id
  };

  return fetch("/movies/remove", requestOptions);
}

function getAllMovies() {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  };

  return fetch("/movies", requestOptions);
}

function getTop5() {
  const requestOptions = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  };

  return fetch(
    "http://www.mocky.io/v2/5dc3c053300000540034757b",
    requestOptions
  );
}
