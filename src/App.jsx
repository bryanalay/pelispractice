import "./App.css";
import { Movies } from "./Components/Movies.jsx";
import withoutResultss from "../mocks/withoutResults.json";
import { useRef, useState } from "react";
import { useSearch } from "./Hooks/useSearch.js";

function App() {
  //const inputRef = useRef()

  function handleSubmit(event){
    event.preventDefault()
    //const value = inputRef.current.value
    //console.log(value);
    console.log(search)
    console.log(error);;
  }

  function handleChange(evt){
    setSearch(evt.target.value)
    console.log(evt.target.value);
  }
  const { search, setSearch, error } = useSearch()

  return (
    <div>
      <header className="page">
        <h1>BUSCADOR DE PELICULAS</h1>
        <form onSubmit={handleSubmit} className="form">          
          <input value={search} onChange={handleChange} placeholder="avengers, matrix, dragonball..."></input>
          <button type="submit" >Search</button>
          {error && <p>{error}</p>}
        </form>
      </header>
      <main>
        <Movies/>
      </main>
    </div>
  );
}

export default App;
