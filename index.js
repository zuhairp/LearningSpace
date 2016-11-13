import React from 'react';
import ReactDOM from 'react-dom';

import OptionsScreen from './scenes/OptionsScreen';
import VRScene from './scenes/VRScene';
import VRMountainScene from './scenes/VRMountainScene';

class Application extends React.Component {
  constructor(props){
    super(props);
    this.state = {page: 'options'};
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

ReactDOM.render(<Application />, document.querySelector('.scene-container'));
