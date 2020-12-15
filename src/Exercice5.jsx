export function Exercice5() {
  const pokemons = [
    { name: "Pikachu", element: "électrique" },
    { name: "Bulbizar", element: "herbe" },
    { name: "Dracolosse", element: "fée" },
  ];

  return (
    <ul className="App">
      {pokemons.map((pokemon) => {
        return <li key={pokemon.name}>{pokemon.name}</li>;
      })}
    </ul>
  );
}

export function Exercice5Exemple() {
  const pokemons = [
    { name: "Pikachu", element: "électrique" },
    { name: "Bulbizar", element: "herbe" },
    { name: "Dracolosse", element: "fée" },
  ];

  return {
    tagName: "ul",
    className: "App",
    children: pokemons.map((pokemon) => {
      return {
        tagName: "li",
        children: [pokemon.name],
      };
    }),
  };
}
