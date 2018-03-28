import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import { Redirect } from "react-router";
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";
import Button from "material-ui/Button";

const styles = theme => ({});

class ApplicationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fireRedirectToApplicationsPage: false,
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

  handleSubmit = event => {
    event.preventDefault();
    const errors = this.validate(this.state.name);
    var isValid = true;
    for (var error in errors) if (errors[error]) isValid = false;

    if (isValid) {
      this.props.onSubmit(this.state).then(res =>
        this.setState({
          fireRedirectToApplicationsPage: true
        })
      );
    } else {
      alert("Invalid data");
    }
  };

  render() {
    return (
      <div>
        {this.state.fireRedirectToApplicationsPage && (
          <Redirect to={this.props.returnUrl || "/"} />
        )}
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
          <Button type="submit" variant="raised" color="primary">
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(ApplicationForm);
