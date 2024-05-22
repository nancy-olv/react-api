//import logo from './logo.svg';
import image1 from '../src/img/rick-morty.png'
import {useState} from 'react';
import Characters from './components/Characters';
import './App.css';


function App() {
  const [characters, setCharacters ]= useState(null);
  const reqApi = async() => {
  const api = await fetch("https://rickandmortyapi.com/api/character")
  console.log(api);

  const characterApi = await api.json();
  console.log(characterApi);
  console.log(characters);
  setCharacters(characterApi.results);
  console.log(characters);
  }

  return (
    <div className="App">
      <header className='App-header'>
        <h1 className='title'>Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters}></Characters>
        ) : (
        <>
        <img src={image1} className="img-home" alt="rick and morty"></img>
        <button onClick={reqApi} className='btn-search'>
          Buscar personaje
        </button> 
        </>
        )
        }
      </header>
    </div>
  );
}

export default App;
