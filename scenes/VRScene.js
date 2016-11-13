import 'aframe';
import {Entity, Scene} from  'aframe-react';
import React from 'react';

import VRMountainScene from './VRMountainScene'

class VRScene extends React.Component {
  constructor(props){
    super(props);
    this.props = props;

    const { terms } = this.props;

    this.state = {color: 'red', currentTerm: terms[0]};

    this.recognition = new webkitSpeechRecognition()
    this.recognition.continuous = true;
    this.recognition.interimResults = false;

    this.onSpeechResult = this.onSpeechResult.bind(this);
    this.recognition.onresult = this.onSpeechResult;

    this.recognition.start();

  }

  onSpeechResult(event){
      const { resultIndex, results } = event;
      const transcript = (event.results[resultIndex][0].transcript);
      
      if(transcript.toLowerCase().trim() == "next"){
        const randomChoice = this.props.terms[Math.floor(Math.random() * this.props.terms.length)];
        this.setState({currentTerm: randomChoice});
      }
  }

  componentWillUnmount(){
    this.recognition.stop();
  }

  render () {
    const { terms, sceneIndex } = this.props;

    const term = terms[0];
    
    switch(sceneIndex){
        case 0: return <VRMountainScene term={this.state.currentTerm} />
        default: console.error("Uknown scene index"); return;
    }
  }
  
}

module.exports = VRScene;
