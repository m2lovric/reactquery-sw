import { useQuery } from 'react-query';
import Person from './Person';

const fetchPeople = async () => {
  const res = await fetch('https://swapi.dev/api/people');
  return res.json();
};

const People = () => {
  const { data, status } = useQuery('people', fetchPeople);
  console.log(data);
  return (
    <section>
      <h1>People</h1>
      {status === 'error' && <article>Error fetching data</article>}
      {status === 'loading' && <article>Loading data...</article>}
      {status === 'success' && (
        <article>
          {data.results.map((person) => (
            <Person key={person.name} people={person} />
          ))}
        </article>
      )}
    </section>
  );
};

export default People;
