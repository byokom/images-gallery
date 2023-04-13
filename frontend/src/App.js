import React from 'react';
import ReactDOM from 'react-dom';
import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import Search from './components/Search.js';



const App = () => {
  const [word, setWord] = useState('')
  
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log(word)
  }
  return (
    <div>
      <Header title="Images Gallery 2" />
      <Search word={word} setWord={setWord} handleSubmit={handleSearchSubmit} />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));
export default App;
