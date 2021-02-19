import Menu from './Menu'
import { makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Producto from './Producto.json';
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
  }));

  function agregar() {
    const nuevoProd=Producto
    Producto.id=1

  }

function Nuevo() {
      const classes = useStyles();
  return (
    <div>
      <Menu/>
      <br/>
      <div className={classes.texto}>
      <h1>Agregar Producto</h1>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Usuario" ref="nombre" variant="outlined" />
            <br/>
            <TextField id="outlined-basic" label="Precio" ref="precio" variant="outlined" />
            <br/>
            <TextField id="outlined-basic" label="Categoria" ref="categoria" variant="outlined" />
            <br/>
            <TextField id="outlined-basic" label="Descripcion" ref="descripcion" variant="outlined" />
            <br/>
        <Button variant="contained" color="primary">
          <Link to="/home-adm" className={classes.linki}>Iniciar Sesión</Link>
        </Button>
        </form>
      </div>
    </div>
  );
}

export default Nuevo;