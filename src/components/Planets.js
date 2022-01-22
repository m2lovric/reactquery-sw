import { useQuery } from 'react-query';
import { useState } from 'react/cjs/react.development';
import Planet from './Planet';

const fetchPlanets = async ({ queryKey }) => {
  const [_, page] = queryKey;
  const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  return res.json();
};

const Planets = () => {
  const [page, setPage] = useState(1);
  const { data, status } = useQuery(['planets', page], fetchPlanets);
  console.log(data);
  return (
    <section>
      <h1>Planets</h1>
      <button onClick={() => setPage(1)}>Page 1</button>
      <button onClick={() => setPage(2)}>Page 2</button>
      <button onClick={() => setPage(3)}>Page 3</button>

      {status === 'error' && <article>Error fetching data</article>}
      {status === 'loading' && <article>Loading data...</article>}
      {status === 'success' && (
        <article>
          {data.results.map((planet) => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </article>
      )}
    </section>
  );
};

export default Planets;
