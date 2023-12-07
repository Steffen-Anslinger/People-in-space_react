import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

const URL = `http://api.open-notify.org/astros.json`;

function App() {
  const [peopleInSpace, setPeopleInSpace] = useState(0);
  const [namePeople, setNamePeople] = useState([]);

  useEffect(() => {
    async function fetchPeople() {
      const response = await fetch(URL);
      const data = await response.json();

      setPeopleInSpace(data.number);
      setNamePeople(data.people);
    }
    fetchPeople();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>In the space we currently can see: {peopleInSpace} people.</p>
        <ul>
          {namePeople.map(({ name, craft }) => (
            <li key={name}>
              {name} - Ship: {craft}
            </li>
          ))}
        </ul>
        <button type="button">All</button>
        <button type="button">ISS</button>
        <button type="button">Tiangong</button>
      </header>
    </div>
  );
}

export default App;
