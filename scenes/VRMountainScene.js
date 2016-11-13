import 'aframe';
import {Entity, Scene} from  'aframe-react';
import React from 'react';
import 'aframe-mountain-component';

import Flashcard from '../components/Flashcard';

/*setting up the entire mountain scene experience*/
class VRMountainScene extends React.Component {
  
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
        <Entity mountain={{color: '#A0522D'}}/>
        <Entity primitive='a-sky' material={{color: 'blue'}} onClick={() => { console.log('Clicked!'); }}/>
        <Entity geometry='primitive: plane' material={{color: 'blue'}} position="-10 0 0" sound='src: url(bird.mp3); autoplay: true; loop: true' />=
      </Scene>
    );
  }
  
}

module.exports = VRMountainScene;
