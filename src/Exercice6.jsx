import { useEffect, useState } from "react";

export function Exercice6() {
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(50);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`)
      .then((rawResponse) => rawResponse.json())
      .then((jsonResponse) => {
        const results = jsonResponse.results;
        setPokemons(results);
      })
      .catch(() => {});
  }, [limit]);

  console.log(limit);

  return (
    <ul className="App">
      <input
        type="number"
        value={limit}
        onInput={(event) => {
          setLimit(event.target.value);
        }}
      />

      {pokemons.map((pokemon) => {
        return <li key={pokemon.name}>{pokemon.name}</li>;
      })}
    </ul>
  );
}
