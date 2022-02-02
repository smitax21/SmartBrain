import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';

function App() {
  return (
    <div>
      <Navigation />
      <Logo />
      <ImageLinkForm />
      {/*
      <FaceRecognition /> */}
    </div>
  );
}

export default App;
