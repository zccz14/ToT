/**
 * Created by lqp on 2017/3/13.
 */
import React, {Component} from "react";
import {connect} from "react-redux";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

class ViewProblem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange = (expanded) => {
    this.setState({expanded: expanded});
  };

  handleToggle = (event, toggle) => {
    this.setState({expanded: toggle});
  };

  handleExpand = () => {
    this.setState({expanded: true});
  };

  handleReduce = () => {
    this.setState({expanded: false});
  };

  render() {
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title="Title"
          subtitle="Date"
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardMedia
          expandable={true}
          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle"/>}
        >
          <img src="http://img.hb.aicdn.com/1aa3556c1b27a5714be057013b8a89445c6e64e632167-Vm2sLo_fw658"
               alt="就是你网不好啊！！！少看！"/>
        </CardMedia>
        <CardTitle title="Card title" subtitle="Card subtitle" expandable={true}/>
        <CardText expandable={true}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <FlatButton label="Edit" onTouchTap={this.handleExpand}/>
          <FlatButton label="Delete" onTouchTap={this.handleReduce}/>
        </CardActions>
      </Card>
    );
  }
}

function select(state) {
  return {
    Session: state.session
  }
}

export default connect(select)(ViewProblem)