import 'aframe';
import {Entity, Scene} from  'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Flashcard from './components/Flashcard';

class VRScene extends React.Component {
  constructor(props){
    super(props);
    this.state = {color: 'red'};
  }

  changeColor() {
   const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)]
    });  
  }

  render () {
    return (
      <Scene>
        <Flashcard position={[0,1,-2]} text={"Hello, World!"} scale={0.5} color={this.state.color}/>
      </Scene>
    );
  }
  
}

ReactDOM.render(<VRScene />, document.querySelector('.scene-container'));
