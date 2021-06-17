import React, { useState } from 'react';
import { useQueryClient, useQuery, useMutation } from 'react-query';

async function getMovies() {
  const url = 'http://localhost:5000/movies/'
  return fetch(url).then(res => res.json())
}

function postMovie(movie) {
  const url = 'http://localhost:5000/movies/';
  const options = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8'
    },
    body: JSON.stringify(movie)
  };
  
  fetch(url, options)
    .then(response => {
      console.log(response.status);
    });
}

export default function MoviesList() {
  // Access the client
  const queryClient = useQueryClient();

  // Queries
  const { isLoading, error, data } = useQuery('movies', getMovies);

  // Mutations
  const mutation = useMutation(postMovie, {
    onSuccess: () => {
      queryClient.invalidateQueries('movies');
    },
  });

  const [movieTitle, setMovieTitle] = useState('');
  const [movieYear, setMovieYear] = useState(2000);

  return (
    <div>
      <ul>
        {isLoading ? (
          <span>loading movie list ...</span>
        ) : (
          <table>
            <thead>
              <tr>
                <th>title</th>
                <th>year</th>
              </tr>
            </thead>
            <tbody>
              {data.movies.map(movie => 
                <tr key={movie.id}>
                  <td>{movie.title}</td>
                  <td>{movie.year}</td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </ul>
      <label>
        Name:
        <input type="text" name="name" value={movieTitle}
               onChange={(e) => setMovieTitle(e.target.value)} />
      </label>
      <label>
        Name:
        <input type="text" name="name" value={movieYear}
               onChange={(e) => setMovieYear(Number(e.target.value))} />
      </label>
      <button
        onClick={() => {
          mutation.mutate({
            id: Date.now(),
            title: movieTitle,
            year: movieYear
          });
        }}
      >
        add movie
      </button>
    </div>
  );
}
