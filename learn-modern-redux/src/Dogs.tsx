import React, { useState } from 'react';
import { useFetchBreedsQuery } from './features/dogs/dogs-api-slice';

function Dogs() {
  const [numDogs, setNumDogs] = useState(5);
  const { data = [], isFetching } = useFetchBreedsQuery(numDogs);

  return (
    <div>
      <p>Dogs to fetch</p>
      <select value={numDogs}
              onChange={e => setNumDogs(Number(e.target.value))}>
        {[5,10,15,20,25,30].map(n => <option key={n} value={n}>{n}</option>)}
      </select>
      <p>number of dogs fetched: {data.length}</p>
      <table>
        <thead>
          <tr>
            <th>Breed</th>
            <th>Picture</th>
          </tr>
        </thead>
        <tbody>
          {data.map(breed => (
            <tr key={breed.id}>
              <td>{breed.name}</td>
              <td>
                <img src={breed.image.url} alt={breed.name} height="250" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dogs;