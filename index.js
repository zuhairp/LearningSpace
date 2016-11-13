import React from 'react';
import ReactDOM from 'react-dom';

import VRScene from './scenes/VRScene';

class Application extends React.Component {
  constructor(props){
    super(props);
    this.state = {page: 'vr'};
  }

  componentWillUnmount(){
  }

  render () {
    if (this.state.page === 'options'){

    }
    else if (this.state.page === 'vr'){
      return (
        <VRScene />
      );
    }
  }
  
}

ReactDOM.render(<Application />, document.querySelector('.scene-container'));
