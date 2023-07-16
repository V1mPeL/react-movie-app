import React from 'react';
import HomePage from "./components/pages/HomePage";
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import SingleMoviePage from './components/pages/SingleMoviePage';


function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/movies/:movieId" element={<SingleMoviePage />}/>
      </Routes>
    </>
  );
}

export default App;

