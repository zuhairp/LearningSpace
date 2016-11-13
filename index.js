import 'aframe';
import {Entity, Scene} from  'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';


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
        <Entity geometry={{primitive: 'box'}} material="color: red" position={[0, 1, -4]}/>
        <Text text='Hello World!' color="purple" position={[-1.75, 1, -1]} />
      </Scene>
    );
  }
  
}

ReactDOM.render(<VRScene />, document.querySelector('.scene-container'));
