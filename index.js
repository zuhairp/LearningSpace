import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import OptionsScreen from './scenes/OptionsScreen';
import VRScene from './scenes/VRScene';
import VRMountainScene from './scenes/VRMountainScene';

import getFlashcards from './utils/flashcards';

import aframe from 'aframe';

class Application extends React.Component {
  constructor(props){
    super(props);
    this.state = {terms: [], page: 'options'};
  }

  optionsChanged(options){
    console.log(options);
    this.setState({index: options.selected_scene_index});
    getFlashcards(options.quizlet_set.value)
    .then(response => {
        console.log("RESPONSE");
        console.log(response);
        this.setState({terms: response, page: 'vr'});
    })
  }

  render () {
    if (this.state.page === 'options'){
      return <OptionsScreen optionsChanged={this.optionsChanged.bind(this)} />
    }
    else if (this.state.page === 'vr'){
      return (
        <VRScene sceneIndex={this.state.index} terms={this.state.terms}/>
      );
    }
  }
  
}
    
aframe.registerComponent('update-raycaster', {
  schema: {type: 'selector'},

  init: function () {
    console.log("HEY! IN HERE!");
    var raycasterEl = this.data;
    raycasterEl.components.raycaster.refreshObjects();
  }
});

ReactDOM.render(<Application />, document.querySelector('.scene-container'));
