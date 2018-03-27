import React, { Component } from "react";
import ApplicationForm from "./ApplicationForm.js";

const styles = theme => ({});

class ApplicationAdd extends Component {
  handleAddSubmit = data => {
    const { name } = data;
    fetch("/applications", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name
      })
    });
  };

  render() {
    return (
      <div>
        <ApplicationForm onSubmit={this.handleAddSubmit} />
      </div>
    );
  }
}

export default ApplicationAdd;
