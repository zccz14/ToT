import React, {Component} from "react";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

class ProblemBuilder extends Component {
  state = {
    type: "OPEN_QUESTION"
  };
  handleChange = (event, index, value) => this.setState({type: value});
  onCreate = () => {
    console.log(this.refs.description.input);
    this.props.onCreate({
      title: this.refs.title.input.value,
      description: this.refs.description.input.refs.input.value, // for multiLine TextField
      type: this.state.type,
      referenceAnswer: this.refs.answer.input.refs.input.value
    });
  };

  onCancel = () => {
    this.props.onCancel();
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
        <TextField
          floatingLabelText="Reference Answer"
          hintText="Type answer here."
          ref="answer"
          multiLine={true}
          fullWidth={true}
          rows={3}
        />
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