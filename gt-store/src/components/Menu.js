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
    width:"auto"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  boton: {
    flexGrow: 1,
    width:"auto",
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
    marginLeft: "auto"
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
            <Link to="/" className={classes.linki}>
            <Button color="inherit" className={classes.boton} size="large">
                HOME
            </Button>
            </Link>
            <Link to="/category" className={classes.linki}> 
              <Button color="inherit" className={classes.boton} size="large">
                CATEGORÍAS
              </Button>
            </Link>
            <Link to="/conocenos" className={classes.linki}>
              <Button color="inherit" className={classes.boton} size="large">
                CÓNOCENOS
              </Button>
            </Link>
            <Link to="/contacto" className={classes.linki}>
              <Button color="inherit" className={classes.boton} size="large">
                CONTÁCTANOS
              </Button>
            </Link>
            <Link to="/login" className={classes.login}>
              <Button
                variant="contained"
                color="default"
                className={classes.button}
                size="large"
                startIcon={<AccountCircleIcon />}
              >
                LOG IN
            </Button>
            </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}