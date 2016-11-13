import React from 'react';

import Button  from 'react-bootstrap/lib/Button';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';


import Grid from 'react-bootstrap/lib/Grid';
import Row  from 'react-bootstrap/lib/Row';
import Col  from 'react-bootstrap/lib/Col';

import ValidatedTextBox from '../components/utils/ValidatedTextBox';

import getFlashcards from '../utils/flashcards';

const _ = require("lodash");

class OptionsScreen extends React.Component {
  constructor(props){
    super(props);
    this.props = props;

    /* Jesse --> add name of scene here */
    this.scene_options = ['Mountain', 'Sechelt'];

    const options = {
      quizlet_set: { value: '161816048',  valid: 'success'},
      selected_scene_index: 0,
    }
    this.state = { options }
    this.quizletIdChanged = _.debounce(this.quizletIdChanged.bind(this), 250);
  }

  sceneSelected(key, value){
    const options = { ...this.state.options, selected_scene_index: key }
    this.setState({options});
  }

  quizletIdChanged(value){
    console.log('hey there!');
    getFlashcards(value)
    .then(response => {
      const options = {...this.state.options, quizlet_set: { value, msg: '', valid: 'success' } } 
      console.log(options);
      this.setState({options});
    })
    .catch(error => {
      const options = {...this.state.options, quizlet_set: { value, msg: error.message, valid: 'error' } } 
      console.error(options);
      this.setState({options});
    })
  }

  onButtonClick(){
    this.props.optionsChanged(this.state.options);
  }

  render () {
    return (
      <Grid fluid>
        <Row>
          <Col md={6} mdOffset={3}><h1 className="center-block"> LearningSpace </h1></Col>
        </Row>
        <Row>
          <Col md={6} mdOffset={3}>
            <ValidatedTextBox 
              controlId="quizletId"
              validationState={this.state.options.quizlet_set.valid}
              label="Quizlet Set ID"
              value={this.state.options.quizlet_set.value}
              onChange={this.quizletIdChanged}
              helpText={this.state.options.quizlet_set.msg}
              />
          </Col>
        </Row>
        <Row>
          <Col md={6} mdOffset={3}>
            <DropdownButton 
              onSelect={this.sceneSelected.bind(this)} 
              bsStyle="default" 
              title={this.scene_options[this.state.options.selected_scene_index]} 
              id="sceneSelector"
            >
            {
              this.scene_options.map((name, index) => {
                return (<MenuItem 
                  eventKey={index} 
                  active={ this.state.options.selected_scene_index === index}>
                  {name}
                </MenuItem>)
              })
            } 
            </DropdownButton>
          </Col>
        </Row>
        <Row>
          <Col md={6} mdOffset={3}>
            <Button bsStyle="primary" onClick={this.onButtonClick.bind(this)} 
              disabled={ this.state.options.quizlet_set.msg !== '' || this.state.options.quizlet_set.value === ''}>Let's Get Started!</Button>
          </Col>
        </Row>
      </Grid>
    );
  }
  
}

module.exports = OptionsScreen;

