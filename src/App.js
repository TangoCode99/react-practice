import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import PhotoGallery from './components/photo-gallery';
import About from './components/about';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes >
        <Route path="/" element={<About/>}></Route>
        <Route path="/photos" element={<PhotoGallery/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
