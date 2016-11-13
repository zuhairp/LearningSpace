import 'aframe';
import {Entity, Scene} from  'aframe-react';
import React from 'react';
import 'aframe-mountain-component';

import Flashcard from '../components/Flashcard';

/*setting up the entire mountain scene experience*/
class VRMountainScene extends React.Component {
    /*creates instance of object*/
  constructor(props){
    super(props);
    this.state = {color: 'red'};
  }
/*visually creates the scene*/
  render () {
    return (
      <Scene>
        <Flashcard position={[0,1,-2]} text={"Hello, World!"} scale={0.5} color={this.state.color}/>
        <Entity mountain={{color: '#A0522D'}}/>
        /*can't seem to get a color for this because it's a primitive & not an entity*/
        <Entity primitive='a-sky' onClick={() => { console.log('Clicked!'); }}/>
      </Scene>
    );
  }
  
}

module.exports = VRMountainScene;
