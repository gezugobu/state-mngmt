
//App.js
import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import MovieList from './Components/MovieList';
 import AddMovie from './Components/AddMovie'
import { MovieProvider } from './Components/MovieListContext';

function App() {
  return (
    <MovieProvider>
    <div className="App">
      <Nav/>
       <AddMovie/> 
      <MovieList/>
    </div>
    </MovieProvider>
  );
}
export default App;



