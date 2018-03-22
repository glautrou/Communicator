import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Link, NavLink } from "react-router-dom";
import Applications from "./Applications.js";
import CssBaseline from "material-ui/CssBaseline";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import Button from "material-ui/Button";
import IconButton from "material-ui/IconButton";
import MenuIcon from "material-ui-icons/Menu";
import Paper from "material-ui/Paper";
import Tabs, { Tab } from "material-ui/Tabs";
import FolderIcon from "material-ui-icons/Folder";
import FavoriteIcon from "material-ui-icons/Favorite";
import PersonPinIcon from "material-ui-icons/PersonPin";

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    return (
      <div className="App">
        <CssBaseline />
        <div className={this.props.classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                className={this.props.classes.menuButton}
                color="inherit"
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="title"
                color="inherit"
                className={this.props.classes.flex}
              >
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to Communicator</h1>
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </div>

        <Paper fullWidth>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            fullWidth
            indicatorColor="secondary"
            textColor="secondary"
            centered
          >
            <Tab
              icon={<FolderIcon />}
              label="Applications"
              component={NavLink}
              to="/"
              activeClassName="active"
            />
            <Tab
              icon={<FavoriteIcon />}
              label="About"
              component={NavLink}
              to="/about"
              activeClassName="active"
            />
          </Tabs>
        </Paper>

        <Switch>
          <Route exact path="/" component={Applications} />
          <Route path="/about" component={About} />
          <Route component={Error404} />
        </Switch>
      </div>
    );
  }
}

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Error404 = () => (
  <div>
    <h2>404 - Page not found :(</h2>
  </div>
);

export default withStyles(styles)(App);
