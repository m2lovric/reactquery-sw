import { useQuery } from 'react-query';
import Planet from './Planet';

const fetchPlanets = async () => {
  const res = await fetch('https://swapi.dev/api/planets');
  return res.json();
};

const Planets = () => {
  const { data, status } = useQuery('planets', fetchPlanets);
  console.log(data);
  return (
    <section>
      <h1>Planets</h1>
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
