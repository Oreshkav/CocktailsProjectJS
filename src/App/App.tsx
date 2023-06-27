import './App.css';
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Cocktails from '../Cocktails/Cocktails';

function App(): JSX.Element {
  return (
    <div className="App">
      <h1> Hello</h1>
      <nav>
        <Link to="cocktails">Cocktails list</Link>
      </nav>
      <br />
      <Routes>
        <Route path="cocktails" element={<Cocktails />} />
      </Routes>
    </div>
  );
}

export default App;