import { useState } from "react";
import { Input } from "./Input";

export function Exercice2() {
  const [name, setName] = useState("World");

  const [number, setNumber] = useState(10);

  const [celsius, setCelsius] = useState(0);

  return (
    <div className="App">
      <label>
        Température en Celsius :<br />
        <input
          type="number"
          value={celsius}
          onInput={(event) => {
            const ownTempInCelsius = parseInt(event.target.value);
            setCelsius(ownTempInCelsius);
          }}
        />
      </label>

      <br />

      <label>
        Température en Farenheit :<br />
        <input
          type="number"
          value={celsiusToFarenheit(celsius)}
          onInput={(event) => {
            const ownTempInFarenheit = parseInt(event.target.value);
            const ownTempInCelsius = farenheitToCelsius(ownTempInFarenheit);
            setCelsius(ownTempInCelsius);
          }}
        />
      </label>

      <br />

      <label>
        Température en Kelvin :<br />
        <input
          type="number"
          value={celsiusToKelvin(celsius)}
          onInput={(event) => {
            const ownTempInKelvin = parseInt(event.target.value);
            const ownTempInCelsius = kelvinToCelsius(ownTempInKelvin);
            setCelsius(ownTempInCelsius);
          }}
        />
      </label>

      <hr />

      <label>
        Votre chiffre :<br />
        <input
          type="number"
          value={number}
          onInput={(event) => {
            setNumber(event.target.value);
          }}
        />
      </label>

      <br />

      <label>
        Votre chiffre / 2 :<br />
        <input
          type="number"
          value={number / 2}
          onInput={(event) => {
            setNumber(event.target.value * 2);
          }}
        />
      </label>

      <hr />

      <Input
        label="Votre nom"
        type="text"
        value={name}
        onInput={(event) => {
          setName(event.target.value);
        }}
      />

      <br />

      <Input
        label="Votre nom inversé :"
        type="text"
        value={reverse(name)}
        onInput={(event) => {
          setName(reverse(event.target.value));
        }}
      />
    </div>
  );
}

function reverse(string) {
  return string.split("").reverse().join("");
}

function celsiusToFarenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function farenheitToCelsius(farenheit) {
  return ((farenheit - 32) * 5) / 9;
}

function celsiusToKelvin(celsius) {
  const kelvin = celsius + 273.15;
  if (kelvin < 0) {
    return 0;
  }
  return kelvin;
}

function kelvinToCelsius(kelvin) {
  return kelvin - 273.15;
}

function farenheitToKelvin(farenheit) {
  return celsiusToKelvin(farenheitToCelsius(farenheit));
}
