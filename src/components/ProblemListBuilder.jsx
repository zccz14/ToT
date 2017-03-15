import React, {Component} from "react";
import Paper from "material-ui/Paper";
import TextField from "material-ui/TextField";
import Checkbox from "material-ui/Checkbox";
import Subheader from "material-ui/Subheader";
import FlatButton from "material-ui/FlatButton";

class ProblemListBuilder extends Component {
  onCreate = () => {
    this.props.onCreate({
      title: this.refs.title.input.value,
      coverUrl: this.refs.coverUrl.input.value,
      public: this.refs.isPublic.isChecked(),
      anonymous: this.refs.isAllowAnonymous.isChecked(),
      submitterVisibleToJudge: this.refs.canJudgerSeeSubmitter.isChecked(),
      resultVisibleToOthers: this.refs.isSentencePublic.isChecked(),
      canBeCopied: this.refs.isAllowCopy.isChecked()
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
        <h2>
          New Problem List
        </h2>
        <TextField
          floatingLabelText="Title"
          hintText="Type title here."
          fullWidth={true}
          ref="title"
        />
        <TextField
          floatingLabelText="Cover URL"
          hintText="Add cover picture URL here."
          fullWidth={true}
          ref="coverUrl"
        />
        <Subheader>Properties</Subheader>
        <Checkbox ref="isPublic" label="Public for everyone"/>
        <Checkbox ref="isAllowAnonymous" label="Allow anonymous submit"/>
        <Checkbox ref="canJudgerSeeSubmitter" label="Judger can see submitter"/>
        <Checkbox ref="isSentencePublic" label="Public sentence"/>
        <Checkbox ref="isAllowCopy" label="Allow others copy this problem list"/>
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

export default ProblemListBuilder;