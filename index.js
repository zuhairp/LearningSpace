import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import OptionsScreen from './scenes/OptionsScreen';
import VRScene from './scenes/VRScene';
import VRMountainScene from './scenes/VRMountainScene';

import injectTapEventPlugin from 'react-tap-event-plugin';

class Application extends React.Component {
  constructor(props){
    super(props);
    this.state = {page: 'options'};
    injectTapEventPlugin();
  }

  optionsChanged(options){
    console.log(options);
    this.setState({options: options});
    this.setState({page: 'vr'});
  }

  render () {
    if (this.state.page === 'options'){
      return <OptionsScreen optionsChanged={this.optionsChanged.bind(this)} />
    }
    else if (this.state.page === 'vr'){
      return (
        <VRMountainScene />
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
