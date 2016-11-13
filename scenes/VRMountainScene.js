import 'aframe';
import {Entity, Scene} from  'aframe-react';
import React from 'react';
import 'aframe-mountain-component';

import Flashcard from '../components/Flashcard';
import Cursor from '../components/primitives/Cursor';

/*setting up the entire mountain scene experience*/
class VRMountainScene extends React.Component {
  
  constructor(props){
    // creates instance of object
    super(props);
    this.state = {color: 'white'};
  }

  render () {
  // visually creates the scene
        // <!-- can't seem to get a color for this because it's a primitive & not an entity -->
    
    const { term: termObject } = this.props;
    const { term, definition } = termObject;
    return (
      <Scene>
        <Flashcard position={[0,1,-2]} text={term} scale={0.5} color={this.state.color}/>
        <Entity mountain={{color: '#A0522D'}}/>
        <Entity primitive='a-sky' material={{color: 'blue'}} onClick={() => { console.log('Clicked!'); }}/>

        <Cursor />
      </Scene>
    );
  }
  
}

module.exports = VRMountainScene;
