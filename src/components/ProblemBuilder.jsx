import React, {Component} from "react";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import Checkbox from "material-ui/Checkbox";
import {RadioButton, RadioButtonGroup} from "material-ui/RadioButton";
import Subheader from "material-ui/Subheader";
import Chip from "material-ui/Chip";

class ProblemBuilder extends Component {
  state = {
    type: "OPEN_QUESTION",
    choice: [],
    answers: []
  };
  handleChange = (event, index, value) => this.setState({type: value});

  getAnswer = () => {
    switch (this.state.type) {
      case 'OPEN_QUESTION':
        return this.refs.answer.input.refs.input.value;
      case 'TRUE_OR_FALSE':
        return this.refs.answerTrueOrFalse.state.switched;
      case 'MULTIPLE_CHOICE_SINGLE_ANSWER':
        return this.refs.answerSingleAnswer.state.selected;
      case 'MULTIPLE_CHOICE_MULTIPLE_ANSWERS':
        return this.state.answers;
      default:
        return null;
    }
  };

  onCreate = () => {
    console.log(this.refs.description.input);
    this.props.onCreate({
      title: this.refs.title.input.value,
      description: this.refs.description.input.refs.input.value, // for multiLine TextField
      type: this.state.type,
      referenceAnswer: this.getAnswer(),
      choice: this.state.choice
    });
  };

  onCancel = () => {
    this.props.onCancel();
  };

  addChoice = () => {
    this.setState({
      choice: [
        ...this.state.choice,
        this.refs.add_choice.input.value
      ],
      answers: [
        ...this.state.answers,
        false
      ]
    });
  };

  removeChoice = (i) => {
    this.setState({
      choice: [
        ...this.state.choice.slice(0, i),
        ...this.state.choice.slice(i + 1)
      ]
    });
  };

  render() {
    return (
      <Paper style={{
        width: '80%',
        margin: '15px auto',
        padding: '15px'
      }} zDepth={3}>
        <h1>
          New problem
        </h1>
        <TextField
          floatingLabelText="Title"
          hintText="Type title here."
          fullWidth={true}
          ref="title"
        />
        <br/>
        <SelectField
          value={this.state.type}
          onChange={this.handleChange}
          floatingLabelText="Type"
          fullWidth={true}
        >
          <MenuItem value="MULTIPLE_CHOICE_SINGLE_ANSWER" primaryText="Multiple Choice with Single Answer"/>
          <MenuItem value="MULTIPLE_CHOICE_MULTIPLE_ANSWERS" primaryText="Multiple Choice with Multiple Answers"/>
          <MenuItem value="TRUE_OR_FALSE" primaryText="True or False"/>
          <MenuItem value="OPEN_QUESTION" primaryText="Open Question"/>
        </SelectField>
        <br/>
        <TextField
          floatingLabelText="Description"
          hintText="Type description here."
          ref="description"
          multiLine={true}
          fullWidth={true}
          rows={3}
        />
        {
          this.state.type === 'TRUE_OR_FALSE' ?
            <Checkbox
              ref="answerTrueOrFalse"
              label="Reference Answer"
              labelPosition="left"
            />
            : null
        }
        {
          this.state.type === 'OPEN_QUESTION' ?
            <TextField
              floatingLabelText="Reference Answer"
              hintText="Type answer here."
              ref="answer"
              multiLine={true}
              fullWidth={true}
              rows={3}
            />
            : null
        }
        {
          this.state.type === 'MULTIPLE_CHOICE_SINGLE_ANSWER' ?
            <div>
              <Subheader>Choice</Subheader>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap'
              }}>
                {
                  this.state.choice.map((v, i) => (
                    <Chip
                      key={i}
                      onRequestDelete={() => {
                        this.removeChoice(i);
                      }}
                      style={{margin: 5}}
                    >
                      {v}
                    </Chip>
                  ))
                }
              </div>
              <Subheader>Reference Answer</Subheader>
              <RadioButtonGroup
                ref="answerSingleAnswer"
                name="answerSingleAnswer"
              >
                {
                  this.state.choice.map((v, i) => (
                    <RadioButton key={i} value={i} label={v}/>
                  ))
                }
              </RadioButtonGroup>
              <br/>
              <TextField
                ref="add_choice"
                floatingLabelText="Add Choice"
                onKeyDown={(e) => e.key === 'Enter' && this.addChoice()}
              />
            </div>
            : null
        }
        {
          this.state.type === 'MULTIPLE_CHOICE_MULTIPLE_ANSWERS' ?
            (
              <div>
                <Subheader>Choice</Subheader>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap'
                }}>
                  {
                    this.state.choice.map((v, i) => (
                      <Chip
                        key={i}
                        onRequestDelete={() => {
                          this.removeChoice(i);
                        }}
                        style={{margin: 5}}
                      >
                        {v}
                      </Chip>
                    ))
                  }
                </div>
                <Subheader>Reference Answer</Subheader>
                <div>
                  {
                    this.state.choice.map((v, i) => (
                      <Checkbox
                        key={i}
                        label={v}
                        onCheck={(e, checked) => {
                          this.setState({
                            answers: [
                              ...this.state.answers.slice(0, i),
                              checked,
                              ...this.state.answers.slice(i + 1)
                            ]
                          })
                        }}
                      />
                    ))
                  }
                </div>
                <br/>
                <TextField
                  ref="add_choice"
                  floatingLabelText="Add Choice"
                  onKeyDown={(e) => e.key === 'Enter' && this.addChoice()}
                />
              </div>
            )
            : null
        }
        <br/>
        <FlatButton
          label="create"
          primary={true}
          style={{marginRight: 15}}
          onTouchTap={this.onCreate}
        />
        <FlatButton
          label="cancel"
          secondary={true}
          style={{marginLeft: 15}}
          onTouchTap={this.onCancel}
        />
      </Paper>
    )
  }
}

export default ProblemBuilder;