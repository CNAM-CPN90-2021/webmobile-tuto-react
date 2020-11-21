import { useState } from "react";
import { Input } from "./Input";

export function Exercice3() {
  const [text, setText] = useState("");
  const [tag, setTag] = useState("");

  return (
    <div className="App">
      <Input
        label="Le chat dit"
        value={text}
        onInput={(event) => {
          setText(event.target.value);
        }}
      />

      <br />

      <Input
        label="Thème"
        value={tag}
        onInput={(event) => {
          setTag(event.target.value);
        }}
      />

      <br />

      {text ? (
        <img
          width="300"
          src={`https://cataas.com/cat/${tag}/says/${text}`}
          alt={`Un chat qui dit ${text}`}
        />
      ) : (
        <p>Le chat ne dit rien</p>
      )}
    </div>
  );
}

function CatImage(props) {
  const { text } = props;

  if (!text) {
    return <p>Le chat ne dit rien</p>;
  }

  return (
    <img
      width="300"
      src={`https://cataas.com/cat/says/${text}`}
      alt={`Un chat qui dit ${text}`}
    />
  );
}

function reverse(string) {
  return string.split("").reverse().join("");
}
