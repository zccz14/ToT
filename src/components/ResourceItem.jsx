import React, {Component} from "react";
import {ListItem} from "material-ui/List";
import IconButton from "material-ui/IconButton";
import ModeEdit from "material-ui/svg-icons/editor/mode-edit";
import Delete from "material-ui/svg-icons/action/delete";
import LibraryBooks from "material-ui/svg-icons/av/library-books";
class ResourceItem extends Component {
  render() {
    return (
      <ListItem
        leftIcon={this.props.icon}
        primaryText={this.props.title}
        secondaryText={this.props.subtitle}
        rightIcon={
          <div style={{
            width: 'auto',
            margin: 0,
            height: 48
          }}>
            <IconButton onTouchTap={() => this.props.onDetail()}>
              <LibraryBooks/>
            </IconButton>
            <IconButton onTouchTap={() => this.props.onEdit()}>
              <ModeEdit />
            </IconButton>
            <IconButton onTouchTap={() => this.props.onDelete()}>
              <Delete />
            </IconButton>
          </div>
        }
      />
    )
  }
}

export default ResourceItem;