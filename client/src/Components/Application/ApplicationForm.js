import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";

const styles = theme => ({});

class ApplicationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event, value) => {
    event.preventDefault();
    const { name } = this.state;
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
        <h2>Application</h2>
        <form onSubmit={this.handleSubmit} noValidate>
          <TextField
            required
            name="name"
            label="Name"
            defaultValue={this.state.name}
            onChange={this.handleChange}
            margin="normal"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(ApplicationForm);
