import Menu from './Menu_adm'
import { makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Producto from './Producto.json';
import * as React from 'react';
import  { Redirect } from 'react-router-dom'

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


function Nuevo() {
      const classes = useStyles();
      const [name, setName] = React.useState("");
      const [precio, setPrecio] = React.useState(0);
      const [categoria, setCategoria] = React.useState("");
      const [descripcion, setDescripcion] = React.useState("");
    const enviar = ()=>{
        const nuevoProd=Producto
        nuevoProd[0].id=1
        nuevoProd[0].Nombre=name
        nuevoProd[0].Precio=precio
        nuevoProd[0].Categoria=categoria
        nuevoProd[0].Descripcion=descripcion
        alert(nuevoProd.map((value)=>value.Nombre))
        localStorage.setItem(1,nuevoProd)

    }
      return (
    <div>
      <Menu/>
      <br/>
      <div className={classes.texto}>
      <h1>Agregar Producto</h1>
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

export default Nuevo;