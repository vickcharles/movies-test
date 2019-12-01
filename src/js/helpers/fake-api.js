
let movies = JSON.parse(localStorage.getItem("movies")) || [];

export const configureFakeAPI = () => {
  let realFetch = window.fetch;
  window.fetch = function(url, opts) {
    return new Promise(resolve => {
      setTimeout(() => {
        if (url.endsWith("/movies/add") && opts.method === "POST") {
          let newMovie = JSON.parse(opts.body);
          movies.push(newMovie)
          localStorage.setItem("movies", JSON.stringify(movies));
          resolve({ ok: true, newMovie });
          return;
        }

        if (url.endsWith("/movies/remove") && opts.method === "DELETE") {
          let id = opts.body;
					let movies = JSON.parse(localStorage.getItem("movies")) || [];
          const moviess = movies.filter(el => el.id !== id);
          localStorage.setItem("movies", JSON.stringify(moviess));

          resolve({ ok: true, json: () => ({}) });

          return;
        }

        if (url.endsWith("/movies") && opts.method === "GET") {
          resolve({ ok: true, movies });
          return;
        }

        realFetch(url, opts).then(response => resolve(response));
      }, 500);
    });
  };
};
