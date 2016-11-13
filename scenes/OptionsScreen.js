import React from 'react';

class OptionsScreen extends React.Component {
  constructor(props){
    super(props);
    this.props = props;

    const options = { quizlet_set: '161816048' }
    this.state = { options }
  }

  changeHandler(key){
    return event => {
      console.log('Hi there!');
      const options = {...this.state.options, [key]: event.target.value } 
      this.setState({options});
    }
  }

  render () {
    return (
      <div>
        <input type="text" value={this.state.options.quizlet_set} onChange={this.changeHandler('quizlet_set')}/> 
        <button onClick={e => this.props.optionsChanged(this.state.options)}> Let's Start</button>
      </div>
    );
  }
  
}

module.exports = OptionsScreen;

