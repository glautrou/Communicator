import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";

const styles = theme => ({});

class ApplicationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      touched: {
        name: false
      }
    };
  }

  validate = name => {
    // true means invalid, so our conditions got reversed
    return {
      name: name.length === 0
    };
  };

  hasError = field => {
    const errors = this.validate(this.state.name);
    const hasError = errors[field];
    const shouldShow = this.state.touched[field];
    return hasError ? shouldShow : false;
  };

  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => {
    const errors = this.validate(this.state.name);
    var isValid = true;
    for (var error in errors) if (errors[error]) isValid = false;

    if (isValid) {
      this.props.onSubmit(this.state);
    } else {
      alert("Invalid data");
    }
  };

  render() {
    return (
      <div>
        <h2>Application</h2>
        <form onSubmit={this.handleSubmit} noValidate>
          <TextField
            required
            {...(this.hasError("name") ? { error: true } : {})}
            name="name"
            label="Name"
            defaultValue={this.state.name}
            onChange={this.handleChange}
            onBlur={this.handleBlur("name")}
            margin="normal"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(ApplicationForm);
