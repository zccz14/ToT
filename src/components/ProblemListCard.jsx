import React, {Component} from "react";
import {Card, CardActions, CardMedia, CardTitle, CardText} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import ProblemListUtil from "../utils/problem_list";

class ProblemListCard extends Component {
  render() {
    const {problemList} = this.props;
    return (
      <Card
        className="flex-item"
        style={{
          height: 500,
          overflow: 'hidden'
        }}
        zDepth={2}
      >
        <CardMedia
          style={{
            height: 400,
            overflow: 'hidden'
          }}
          overlay={
            <CardTitle title={this.props.title}/>
          }
        >
          <img
            src={ProblemListUtil.getCoverURL(problemList)}
            role="presentation"
            style={{maxHeight: '400px'}}
          />
        </CardMedia>
        <CardText>
          {this.props.description || "暂无简介"}
        </CardText>
        <CardActions>
          <FlatButton label="详情"/>
        </CardActions>
      </Card>
    )
  }
}

export default ProblemListCard;