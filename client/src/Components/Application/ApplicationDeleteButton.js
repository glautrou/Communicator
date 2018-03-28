import React, { Component } from "react";
import IconButton from "material-ui/IconButton";
import DeleteIcon from "material-ui-icons/Delete";
import ApplicationForm from "../Shared/AlertDialog.js";

class ApplicationDeleteButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showConfirm: false
    };
  }

  render() {
    return (
      <div>
        <IconButton
          aria-label="Delete"
          onClick={() => this.setState({ showConfirm: true })}
        >
          <DeleteIcon />
        </IconButton>
        {this.state.showConfirm && (
          <ApplicationForm
            title="Delete application"
            description={
              "Are you sure you want to delete " + this.props.name + "?"
            }
            onAccept={() => this.props.onSubmit(this.props.id)}
            onCancel={() => this.setState({ showConfirm: false })}
          />
        )}
      </div>
    );
  }
}

export default ApplicationDeleteButton;
