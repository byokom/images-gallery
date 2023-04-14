import React from 'react';
import { createRoot } from 'react-dom/client';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import Search from './components/Search.js';



const App = () => {
  const [word, setWord] = useState('')

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word)
  }
  console.log(word)
  return (
    <div>
      <Header title="Images Gallery 2" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
}


export default App;
