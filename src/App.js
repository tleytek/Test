import React, { useEffect } from "react";
import { fetchCrypto } from "./actions";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Switch from "./components/Switch";
import Card from "./components/Card";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    minHeight: "100vh"
  },
  title: {
    marginRight: "1em"
  },
  content: {
    marginTop: "2em",
    flexGrow: 1
  }
}));

function App(props) {
  const classes = useStyles();
  useEffect(() => {
    props.fetchCrypto();
  }, []);
  return (
    <div className={classes.root}>
      {console.log(props.crypto)}
      {/* Appbar */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Appbar
          </Typography>
          <Switch />
        </Toolbar>
      </AppBar>
      {/* Main content */}
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.content}
      >
        {[0, 1, 2, 3].map(value => (
          <Grid key={value} item>
            <Card value={value} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    crypto: Object.values(state.crypto)
  };
};

export default connect(mapStateToProps, { fetchCrypto })(App);
