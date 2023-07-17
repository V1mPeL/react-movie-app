import React from 'react';
import HomePage from "./components/pages/HomePage";
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import SingleMoviePage from './components/pages/SingleMoviePage';
import SearchPage from './components/pages/SearchPage';
import ActorPage from './components/pages/ActorPage';



function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/search' element={<SearchPage/>}/>
        <Route path='/actors/:actorId' element={<ActorPage/>}/>
        <Route path="/movies/:movieId" element={<SingleMoviePage />}/>
      </Routes>
    </>
  );
}

export default App;

