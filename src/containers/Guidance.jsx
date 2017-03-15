/**
 * Created by lqp on 2017/3/15.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import Paper from "material-ui/Paper";
import {List} from "material-ui/List";
import Subheader from "material-ui/Subheader";
import ResourceItem from "../components/ResourceItem";


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
            {
              [1, 2, 3, 4].map((v, i) => (<ResourceItem
                  title={v}
                  subtitle={v * v}
                  onEdit={() => console.log('edit', i)}
                  onDelete={() => console.log('delete', i)}
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
    Session: state.session
  }
}

export default connect(select)(Guidance)