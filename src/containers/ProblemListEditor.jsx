/**
 * Created by lqp on 2017/3/12.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {Step, Stepper, StepLabel} from "material-ui/Stepper";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import {List, ListItem} from "material-ui/List";
import ActionInfo from "material-ui/svg-icons/action/info";
import Avatar from "material-ui/Avatar";
import FileFolder from "material-ui/svg-icons/file/folder";

class ProblemListEditor extends Component {
  state = {
    finished: false,
    stepIndex: 0,
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };

  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return 'Select campaign settings...';
      case 1:
        return 'What is an ad group anyways?';
      case 2:
        return 'This is the bit I really care about!';
      default:
        return 'You\'re a long way from home sonny jim!';
    }
  }

  render() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px'};

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Select the problems</StepLabel>
          </Step>
          <Step>
            <StepLabel>Preview your problem list</StepLabel>
          </Step>
          <Step>
            <StepLabel>Finish</StepLabel>
          </Step>
        </Stepper>
        <List>
          <ListItem
            leftAvatar={<Avatar icon={<FileFolder />}/>}
            rightIcon={<ActionInfo />}
            primaryText="Photos"
            secondaryText="Jan 9, 2014"
          />
        </List>
        <div style={contentStyle}>
          {finished ? (
              null
            ) : (
              <div>
                <p>{this.getStepContent(stepIndex)}</p>
                <div style={{marginTop: 12}}>
                  <FlatButton
                    label="Back"
                    disabled={stepIndex === 0}
                    onTouchTap={this.handlePrev}
                    style={{marginRight: 12}}
                  />
                  <RaisedButton
                    label={stepIndex === 2 ? 'Finish' : 'Next'}
                    primary={true}
                    onTouchTap={this.handleNext}
                  />
                </div>
              </div>
            )}
        </div>
      </div>
    );
  }

}

function select(state) {
  return {
    Session: state.session
  }
}

export default connect(select)(ProblemListEditor);