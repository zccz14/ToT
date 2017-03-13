import React, {Component} from "react";
import {Card, CardTitle, CardText} from "material-ui/Card";
import CircularProgress from "material-ui/CircularProgress";

class ProblemCard extends Component {
  state = {
    expanded: false
  };

  render() {
    return (
      <Card
        style={{
          margin: 15
        }}
        expanded={this.state.expanded}
        onExpandChange={(expanded) => {
          this.setState({expanded});
          if (expanded && this.props.data.description === null) {
            this.props.onLoading(this.props.problemId);
          }
        }}
      >
        <CardTitle
          title={this.props.data.title}
          subtitle={this.props.data.type}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <CardText expandable={true}>
          {
            this.props.data.description ?
              this.props.data.description :
              <CircularProgress
                size={60}
                thickness={3}
                style={{
                  margin: '0 auto',
                  display: 'block'
                }}
                color="#FF9800"
              />
          }
        </CardText>
      </Card>
    )
  }
}

export default ProblemCard;