import React from 'react';

import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import HelpBlock from 'react-bootstrap/lib/HelpBlock';

class ValidatedTextBox extends React.Component {
  constructor(props){
    super(props);
    this.props = props;
    this.state = {value: ''}
  }
  
  handleChange(e){
    this.setState({value: e.target.value});
    this.props.onChange(e.target.value);
  }

  render () {
    const { controlId, validationState, label, value, onChange, helpText } = this.props;
    return (
      <form>
        <FormGroup 
          controlId={controlId}
          validationState={validationState}>
          <ControlLabel> {label} </ControlLabel>
          <FormControl 
            type="text" 
            value={this.state.value}
            placeholder="Enter Quizlet set number"
            onChange={this.handleChange.bind(this)}
          />
          <FormControl.Feedback />
          <HelpBlock>{helpText}</HelpBlock>
        </FormGroup>
      </form>
    );
  }
}


module.exports = ValidatedTextBox
