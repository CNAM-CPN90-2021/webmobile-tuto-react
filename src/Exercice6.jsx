import { useEffect, useState } from "react";

export function Exercice6() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetch("")
      .then(() => {})
      .catch(() => {});
  }, []);

  return (
    <ul className="App">
      {pokemons.map((pokemon) => {
        return <li key={pokemon.name}>{pokemon.name}</li>;
      })}
    </ul>
  );
}
