import Menu from './Menu_adm'
import { makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
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


function Editar() {
      const classes = useStyles();
      const [name, setName] = React.useState("");
      const [precio, setPrecio] = React.useState(0);
      const [categoria, setCategoria] = React.useState("");
      const [descripcion, setDescripcion] = React.useState("");
    const enviar = ()=>{
        

    }
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
      <h1>Editar Producto</h1>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Nombre" value={name} onChange={e => setName(e.target.value)} variant="outlined" />
            <br/>
            <TextField id="outlined-basic" label="Precio" value={precio} onChange={e => setPrecio(e.target.value)} variant="outlined" />
            <br/>
            <TextField id="outlined-basic" label="Categoria" value={categoria} onChange={e => setCategoria(e.target.value)} variant="outlined" />
            <br/>
            <TextField id="outlined-basic" label="Descripcion" value={descripcion} onChange={e => setDescripcion(e.target.value)} variant="outlined" />
            <br/>
        <Button variant="contained" color="primary" onClick={enviar}>
          Enviar
        </Button>
        </form>
      </div>
    </div>
  );
}

export default Editar;