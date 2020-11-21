import { useState } from "react";

export function Exercice1() {
  const [name, setName] = useState("World");

  return (
    <div className="App">
      <label>
        Entrez votre nom :<br />
        <input
          type="text"
          value={name}
          onInput={(event) => {
            setName(event.target.value);
          }}
        />
      </label>

      <p>Bonjour {name}</p>

      <p>Votre nom inversé est : %TODO%</p>
    </div>
  );
}
