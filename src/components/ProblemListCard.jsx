import React, {Component} from "react";
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";

class ProblemListCard extends Component {
  render() {
    return (
      <Card className="flex-item" style={this.props.style} zDepth={2}>
        <CardHeader
          title="作者名字"
          subtitle="2017-03-09 23:32:43"
          avatar="https://www.gravatar.com/avatar/"
        />
        <CardMedia
          overlay={
            <CardTitle title="题单标题"/>
          }
        >
          <img src="http://www.material-ui.com/images/nature-600-337.jpg" alt="haha"/>
        </CardMedia>
        <CardText>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
          Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
          Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
        </CardText>
        <CardActions>
          <FlatButton label="详情"/>
        </CardActions>
      </Card>
    )
  }
}

export default ProblemListCard;