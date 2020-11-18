import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [timeSpent, setTimeSpent] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTimeSpent((value) => value + 1);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <h1>Hello World</h1>

      <time>Le temps écoulé est : {timeSpent} secondes</time>

      <br />
      <Button />
    </div>
  );
}

function Button() {
  const [timesClicked, setTimesClicked] = useState(0);

  return (
    <button
      onClick={() => {
        setTimesClicked(timesClicked + 1);
      }}
    >
      Cliquez moi ! (cliqué: {timesClicked} fois)
    </button>
  );
}

export default App;
