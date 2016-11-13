import 'aframe';
import {Entity, Scene} from  'aframe-react';
import React from 'react';
import 'aframe-mountain-component';

import Flashcard from '../components/Flashcard';
import Sky from '../components/primitives/Sky';

/*setting up the entire mountain scene experience*/
class VRSecheltScene extends React.Component {
  
  constructor(props){
    // creates instance of object
    super(props);
    this.state = {color: 'red'};
  }
 
  
    
  render () {
  // visually creates the scene
    return (
      <Scene>
        <Flashcard position={[0,1,-2]} text={"Hello, World!"} scale={0.5} color={this.state.color}/>
        <Sky src="url(https://rawgit.com/aframevr/assets/gh-pages/360-image-gallery-boilerplate/img/sechelt.jpg)"/>
        <Entity geometry='primitive: plane' material={{color: 'blue'}} position="-10 0 0" sound='src: url(nightTime.mp3); autoplay: true; loop: true' />=
      </Scene>
    );
  }
  
}

module.exports = VRSecheltScene;
