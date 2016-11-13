import 'aframe';
import {Entity, Scene} from  'aframe-react';
import React from 'react';

import VRMountainScene from './VRMountainScene'

class VRScene extends React.Component {
  constructor(props){
    super(props);
    this.props = props;
    this.state = {color: 'red'};

    this.recognition = new webkitSpeechRecognition()
    this.recognition.continuous = true;
    this.recognition.interimResults = false;
    //this.recognition.start();
  }

  componentWillUnmount(){
    //this.recognition.stop();
  }

  render () {
    const { terms, sceneIndex } = this.props;

    switch(sceneIndex){
        case 0: return <VRMountainScene terms={terms} />
        default: console.error("Uknown scene index"); return;
    }
  }
  
}

module.exports = VRScene;
