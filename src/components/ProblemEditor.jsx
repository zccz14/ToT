import React, {Component} from "react";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";

class ProblemEditor extends Component {
  onCreate = () => {
    console.log(this.refs.description.input);
    this.props.onCreate({
      title: this.refs.title.input.value,
      description: this.refs.description.input.refs.input.value // for multiLine TextField
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
        <TextField
          floatingLabelText="Description"
          hintText="Type description here."
          ref="description"
          multiLine={true}
          fullWidth={true}
          rows={10}
        />
        <input type="file" style={{display: 'none'}}/>
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

export default ProblemEditor;