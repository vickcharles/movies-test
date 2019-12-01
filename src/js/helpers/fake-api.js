let movies = JSON.parse(localStorage.getItem("movies")) || [];

export const configureFakeAPI = () =>  {
  let realFetch = window.fetch;
  window.fetch = function(url, opts) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (url.endsWith("/movies/add") && opts.method === "POST") {
          let newMovie = JSON.parse(opts.body);
          localStorage.setItem("users", JSON.stringify(newMovie));

          resolve({ ok: true, newMovie});

          return;
				}

				if (url.endsWith("/movies/remove") && opts.method === "DELETE") {
					let id = JSON.parse(opts.body);
					const moviess = movies.filter(el => el.id === id)
          localStorage.setItem("users", JSON.stringify(moviess));

          resolve({ ok: true, json: () => ({}) });

          return;
        }

        realFetch(url, opts).then(response => resolve(response));
      }, 500);
    });
  };
}
