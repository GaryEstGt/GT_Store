import Menu from './Menu_adm'
import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import * as React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {
    Link
  } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    texto: {
      marginLeft: 500,
    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '50ch',
        },
    },
    linki:{
      textDecoration: 'none',
      outline: 'none',
      color: 'white',
  },
  regresar:{
      marginLeft:10,
  }
  }));


function Ver() {
      const classes = useStyles();
      return (
    <div>
      <Menu/>
      <br/>
    <Link to="/adm-prod" className={classes.login}>
      <Button variant="contained" color="primary" className={classes.regresar}>
        <ArrowBackIcon/>
        </Button>
    </Link>
      <div className={classes.texto}>
      <h1>Ver Producto</h1>
        <form className={classes.root} noValidate autoComplete="off">
            <h2>Nombre</h2>
            <br/>
            <h2>Precio</h2>                            
            <br/>
            <h2>Tipo</h2>
            <br/>
            <h2>Descripción</h2>
            <br/>
        </form>
      </div>
    </div>
  );
}

export default Ver;