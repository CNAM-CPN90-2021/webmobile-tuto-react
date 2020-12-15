import { Exercice1 } from "./Exercice1";
import { Exercice2 } from "./Exercice2";
import { Exercice3 } from "./Exercice3";
import { Exercice5 } from "./Exercice5";
import "./App.css";

export function App() {
  return (
    <div className="App">
      <Exercice5 />
      <hr />
      <Exercice3 />
      <hr />
      <Exercice2 />
      <hr />
      <Exercice1 />
    </div>
  );
}
