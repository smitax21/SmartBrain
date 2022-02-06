import React from 'react';
// import Clarifai from 'clarifai';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import ParticleStructure from './Components/Particles/Particles';
import { Component } from 'react/cjs/react.production.min';


class App extends Component{
  constructor(){
     super();

     this.state = {
       input: ' ',
     }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log("click")
    // app.models.predict(
    //   {
    //     id: "a403429f2ddf4b49b307e318f00e528b",
    //     version: "34ce21a40cc24b6b96ffee54aabff139",
    //   }
    // ).then(
    //   function (response) {
    //     console.log(response)
    //   },
    //   function(err) {

    //   }
    // );
  }

  render(){
    return (
      <div>
        <ParticleStructure />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
            onInputChange={this.onInputChange} 
            onButtonSubmit={this.onButtonSubmit} />
        {/*
        <FaceRecognition /> */}
      </div>
    );
  }
  
}

export default App;
