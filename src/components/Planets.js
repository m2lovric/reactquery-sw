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
  const { data, status, isPreviousData } = useQuery(
    ['planets', page],
    fetchPlanets,
    {
      keepPreviousData: true,
    }
  );
  console.log('hasmore:', isPreviousData);
  return (
    <section>
      <h1>Planets</h1>
      {status === 'error' && <article>Error fetching data</article>}
      {status === 'loading' && <article>Loading data...</article>}
      {status === 'success' && (
        <>
          <button
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            className='btn'
            disabled={page === 1}
          >
            Previous page
          </button>
          {page}
          <button
            onClick={() =>
              setPage((old) => (isPreviousData || !data.next ? old : old + 1))
            }
            className='btn'
            disabled={isPreviousData || !data.next}
          >
            Next page
          </button>
          <article>
            {data.results.map((planet) => (
              <Planet key={planet.name} planet={planet} />
            ))}
          </article>
        </>
      )}
    </section>
  );
};

export default Planets;
