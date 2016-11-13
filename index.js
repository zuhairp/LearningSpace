import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import OptionsScreen from './scenes/OptionsScreen';
import VRScene from './scenes/VRScene';

import getFlashcards from './utils/flashcards';

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
        <VRScene sceneIndex={this.state.index} />
      );
    }
  }
  
}

const App = () => (
  <MuiThemeProvider>
    <Application />
  </MuiThemeProvider>
)

ReactDOM.render(<App />, document.querySelector('.scene-container'));
