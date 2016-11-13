import 'aframe';
import {Entity, Scene} from  'aframe-react';
import React from 'react';

import Flashcard from '../components/Flashcard';

class VRScene extends React.Component {
  constructor(props){
    super(props);
    this.state = {color: 'red'};

    this.recognition = new webkitSpeechRecognition()
    this.recognition.continuous = true;
    this.recognition.interimResults = false;
    this.recognition.start();

    this.recognition.onresult = event => {
      const { resultIndex, results } = event;
      const transcript = (event.results[resultIndex][0].transcript);
      this.setState({color: transcript});
    }
  }

  componentWillUnmount(){
    this.recognition.stop();
  }

  render () {
    return (
      <Scene>
        <Flashcard position={[0,1,-2]} text={"Hello, World!"} scale={0.5} color={this.state.color}/>
      </Scene>
    );
  }
  
}

module.exports = VRScene;
