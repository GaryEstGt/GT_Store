import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {
    Link
  } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linki:{
      textDecoration: 'none',
      outline: 'none',
      color: 'white',
  },
  login:{
    textDecoration: 'none',
    outline: 'none',
    color: 'black',
},

  
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" className={classes.menuButton}>
                GT STORE
            </Typography>
            <Button color="inherit" className={classes.root} size="large">
                <Link to="/home-adm" className={classes.linki}>HOME</Link>
            </Button>
            <Button color="inherit" className={classes.root} size="large">
                <Link to="/adm-prod" className={classes.linki}>Administración de Productos</Link>
            </Button>
            <Button
                variant="contained"
                color="default"
                className={classes.button}
                size="large"
                startIcon={<AccountCircleIcon />}
            >
                <Link to="/" className={classes.login}>LOG OUT</Link>
            </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}