import React from 'react';
import './App.css';
import {Header} from './components/ui/Header';
import {MovieCards} from './components/ui/MovieCards';

function App() {
  return (
    <div className="app">
      <Header />
      <MovieCards />
    </div>
  );
}

export default App;
