/**
 * Created by lqp on 2017/3/15.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import GuidanceEditIcon from "../components/GuidanceEditIcon";
import Paper from "material-ui/Paper";
import FileFolder from "material-ui/svg-icons/file/folder";
import {List, ListItem} from "material-ui/List";
import Subheader from "material-ui/Subheader";

class Guidance extends Component {
  render() {
    return (
      <div>
        <Paper
          style={{width: "70%", margin: "0 auto", marginTop: 30}}
          zDepth={2}
        >
          <List>
            <Subheader inset={true}>Latest Problem List Created</Subheader>
            <ListItem
              leftIcon={<FileFolder />}
              primaryText="problem list title"
              secondaryText="Date eg.March 15 2017"
              style={{display: "inlineBlock"}}
            >
              <GuidanceEditIcon/>
            </ListItem>

            <ListItem
              leftIcon={<FileFolder />}
              primaryText="problem list title"
              secondaryText="Date eg.March 15 2017"
            />
            <ListItem
              leftIcon={<FileFolder />}
              primaryText="problem list title"
              secondaryText="Date eg.March 15 2017"
            />
          </List>
        </Paper>
      </div>
    )
  }
}

function select(state) {
  return {
    Session: state.session
  }
}

export default connect(select)(Guidance)