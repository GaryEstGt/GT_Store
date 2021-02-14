import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

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
  
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" className={classes.menuButton}>
            <div>
            <img src="https://drive.google.com/uc?id=1WyIuF0hgB3-J-w-4PZb4dKi65nfSu2Wf" alt="" width="130px" height="50px" />
            </div>
            </Typography>
            <Button color="primary" className={classes.root} size="large">HOME</Button>
            <Button color="primary" className={classes.root} size="large">CATEGORÍAS</Button>
            <Button color="primary" className={classes.root} size="large">CÓNOCENOS</Button>
            <Button color="primary" className={classes.root} size="large">CONTÁCTANOS</Button>
            <Button
                variant="contained"
                color="default"
                className={classes.button}
                size="large"
                startIcon={<AccountCircleIcon />}
            >
                LOG IN
            </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}