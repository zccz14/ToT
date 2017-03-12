import React, {Component} from "react";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";

class ProblemEditor extends Component {
  render() {
    return (
      <Paper style={{
        width: '80%',
        margin: '15px auto',
        padding: '15px'
      }} zDepth={3}>
        <h1>
          Create a problem
        </h1>
        <TextField
          floatingLabelText="Title"
          hintText="Type title here."
          fullWidth={true}
        />
        <br/>
        <TextField
          floatingLabelText="Description"
          hintText="Type description here."
          multiLine={true}
          fullWidth={true}
          rows={10}
        />
        <input type="file" style={{display: 'none'}}/>
        <br/>
        <FlatButton label="create" primary={true} style={{marginRight: 15}}/>
        <FlatButton label="cancel" secondary={true} style={{marginLeft: 15}}/>
      </Paper>
    )
  }
}

export default ProblemEditor;