const Person = ({ people }) => {
  return (
    <div className='card'>
      <h3>{people.name}</h3>
      <p>Population - {people.gender}</p>
      <p>Terrain - {people.birth_year}</p>
    </div>
  );
};

export default Person;
