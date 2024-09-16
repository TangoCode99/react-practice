import React from 'react';
import './App.css';
import Header from './components/header';
import PhotoGallery from './components/photo-gallery';

function App() {
  return (
    <div className="App">
      <Header/>
      <PhotoGallery/>
    </div>
  );
}

export default App;
