import React, { Component } from "react";
import ApplicationDeleteButton from "./ApplicationDeleteButton.js";
import { Link } from "react-router-dom";
import { withStyles } from "material-ui/styles";
import Badge from "material-ui/Badge";
import Grid from "material-ui/Grid";
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "material-ui/Table";
import Paper from "material-ui/Paper";
import Typography from "material-ui/Typography";

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    maxWidth: 700
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    },
    "&:hover": {
      backgroundColor: "#BBBBBB"
    }
  },
  cell: {
    textAlign: "center"
  }
});

class ApplicationList extends Component {
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

  deleteApplication = id => {
    fetch(`/applications/{id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
  };

  render() {
    return (
      <div>
        <h2>Applications</h2>
        <Link to="/applications/add">Add new application</Link>
        <Paper className={this.props.classes.root}>
          <Table className={this.props.classes.table}>
            <TableHead>
              <TableRow>
                <TableCell className={this.props.classes.cell}>#</TableCell>
                <TableCell className={this.props.classes.cell}>Name</TableCell>
                <TableCell className={this.props.classes.cell} />
              </TableRow>
            </TableHead>
            <TableBody>
              {this.state.applications.map(application => {
                return (
                  <TableRow
                    key={application._id}
                    className={this.props.classes.row}
                  >
                    <TableCell className={this.props.classes.cell}>
                      {application._id}
                    </TableCell>
                    <TableCell className={this.props.classes.cell}>
                      {application.name}
                    </TableCell>
                    <TableCell className={this.props.classes.cell}>
                      <ApplicationDeleteButton
                        name={application.name}
                        onSubmit={this.deleteApplication}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Paper>

        <div>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Paper>xs=12</Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper>xs=12 sm=6</Paper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Paper>xs=12 sm=6</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper>xs=6 sm=3</Paper>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Paper>xs=6 sm=3</Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ApplicationList);
