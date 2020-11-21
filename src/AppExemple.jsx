import { useState, useEffect } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Title label="Hello World" />

      <Clock interval={3000} />

      <br />
      <Button color="blue" />
    </div>
  );
}

function Title(props) {
  return <h1>{props.label.toUpperCase()}</h1>;
}

function Clock(props) {
  const { interval } = props;
  const [timeSpent, setTimeSpent] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTimeSpent((value) => value + 1);
    }, interval);
  }, []);

  return <time>Le temps écoulé est : {timeSpent} secondes</time>;
}

function Button(props) {
  const color = props.color || "black";

  const [timesClicked, setTimesClicked] = useState(0);

  return (
    <button
      style={{
        color: color,
      }}
      onClick={() => {
        setTimesClicked(timesClicked + 1);
      }}
    >
      Cliquez moi ! (cliqué: {timesClicked} fois)
    </button>
  );
}

export default App;
