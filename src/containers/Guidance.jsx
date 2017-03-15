/**
 * Created by lqp on 2017/3/15.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import Paper from "material-ui/Paper";
import {List} from "material-ui/List";
import Subheader from "material-ui/Subheader";
import ResourceItem from "../components/ResourceItem";
import FileFolder from "material-ui/svg-icons/file/folder";
import PlaylistAddCheck from "material-ui/svg-icons/av/playlist-add-check";

class Guidance extends Component {
  render() {
    return (
      <div>
        <Paper
          style={{width: "70%", margin: "0 auto", marginTop: 30, marginBottom: 30}}
          zDepth={2}
        >
          <List>
            <Subheader inset={true}>Latest Problem List Created</Subheader>
            {
              this.props.ProblemList.get('items').map((v, i) => (
                <ResourceItem
                  title={v.title}
                  subtitle={i}
                  onDetail={() => this.props.router.push(`/dashboard/problem-lists/${i}`)}
                  onEdit={() => console.log('edit', i)}
                  onDelete={() => console.log('delete', i)}
                  icon={<FileFolder />}
                />)
              )
            }
          </List>
        </Paper>
        <Paper
          style={{width: "70%", margin: "0 auto", marginTop: 30, marginBottom: 30}}
          zDepth={2}
        >
          <List>
            <Subheader inset={true}>Latest Problem Created</Subheader>
            {
              [1, 2, 3, 4].map((v, i) => (<ResourceItem
                  title={v}
                  subtitle={v * v * v}
                  onEdit={() => console.log('edit', i)}
                  onDelete={() => console.log('delete', i)}
                  icon={<PlaylistAddCheck />}
                />)
              )
            }
          </List>
        </Paper>
        <Paper
          style={{width: "70%", margin: "0 auto", marginTop: 30, marginBottom: 30}}
          zDepth={2}
        >
          <List>
            <Subheader inset={true}>Submission</Subheader>
            {
              [1, 2, 3, 4].map((v, i) => (<ResourceItem
                  title={v}
                  subtitle={v * v * v}
                  onEdit={() => console.log('edit', i)}
                  onDelete={() => console.log('delete', i)}
                  icon={<PlaylistAddCheck />}
                />)
              )
            }
          </List>
        </Paper>
      </div>
    )
  }
}

function select(state) {
  return {
    Session: state.Session,
    ProblemList: state.ProblemList
  }
}

export default connect(select)(Guidance)