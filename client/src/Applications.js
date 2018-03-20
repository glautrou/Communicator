import React, { Component } from "react";

class Applications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applications: []
    };
  }

  componentDidMount() {
    fetch("/applications")
      .then(res => res.json())
      .then(applications => this.setState({ applications }));
  }

  render() {
    return (
      <div>
        <h2>Applications:</h2>
        <ul>
          {this.state.applications.map(application => (
            <li key={application._id}>
              {application.name} ({application._id})
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Applications;
