import React, {Component} from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

class ProblemListCard extends Component {
  render() {
    return (
      <Card className="flex-item" style={this.props.style} zDepth={2}>
        <CardHeader
          title={this.props.creatorName}
          subtitle={this.props.date}
          avatar={this.props.creatorAvatar || 'https://www.gravatar.com/avatar/'}
        />
        <CardMedia
          overlay={
            <CardTitle title={this.props.title}/>
          }
        >
          <img src="http://www.material-ui.com/images/nature-600-337.jpg" alt="haha"/>
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