import React, {Component} from "react";
import FloatingActionButton from "material-ui/FloatingActionButton";
import Popover from "material-ui/Popover";
import Menu from "material-ui/Menu";
import MenuItem from "material-ui/MenuItem";
import ContentAdd from "material-ui/svg-icons/content/add";


class QuickStart extends Component {
  state = {
    open: false
  };

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  onNewProblem = () => {
    this.handleRequestClose();
    this.props.onNewProblem();
  };

  onNewProblemList = () => {
    this.handleRequestClose();
    this.props.onNewProblemList();
  };


  render() {
    return (
      <div>
        <FloatingActionButton
          style={{
            position: 'fixed',
            right: '2em',
            bottom: '2em',
            zIndex: 50
          }}
          onTouchTap={this.handleTouchTap}
        >
          <ContentAdd/>
        </FloatingActionButton>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <MenuItem
              primaryText="New Problem"
              onTouchTap={this.onNewProblem}
            />
            <MenuItem
              primaryText="New Problem List"
              onTouchTap={this.onNewProblemList}
            />
            <MenuItem
              primaryText="New Group"
              disabled={true}
            />
          </Menu>
        </Popover>
      </div>
    );
  }
}

export default QuickStart;