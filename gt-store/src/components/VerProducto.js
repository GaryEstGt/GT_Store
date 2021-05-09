import Menu from './Menu_adm'
import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import * as React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import axios from 'axios';
import {useEffect } from 'react';
import {
    Link
  } from "react-router-dom";
  import { useLocation } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    texto: {
      marginLeft: "35%",
    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '50%',
        },
    },
    linki:{
      textDecoration: 'none',
      outline: 'none',
      color: 'white',
  },
  regresar:{
      marginLeft:'2%',
  }
  }));


function Ver() {
      const classes = useStyles();
      const [producto, setProducto] = React.useState([]);
      const querystring = window.location.search
      const query = new URLSearchParams(querystring);
      var id  = query.get('id');
      console.log(id)
      useEffect(() => {
        // Extrae productos desde la API
        axios.get('http://EC2Co-EcsEl-5OOEYFX1RC2G-22735838.us-east-2.elb.amazonaws.com:4200/buscar?id='+id).then(result=>{
          console.log(result.data)
           setProducto(result.data)
        }      
        ).catch(console.log)
      }, [id]);
      return (
    <div>
      <Menu/>
      <br/>
      <br/>
      <br/>
      <br/>
    <Link to="/adm-prod" className={classes.login}>
      <Button variant="contained" color="primary" className={classes.regresar}>
        <ArrowBackIcon/>
        </Button>
    </Link>
      <div className={classes.texto}>
      <h1>Ver Producto</h1>
        <form className={classes.root} noValidate autoComplete="off">
        <h2>Imagen del producto</h2>
            <img src={producto.product_foto} alt="foto de producto"/>
            <h2>Nombre</h2>
            <h4>{producto.product_name}</h4>
            <br/>
            <h2>Precio</h2>
            <h4>{producto.product_price}</h4>                           
            <br/>
            <h2>Tipo</h2>
            <h4>{producto.product_type}</h4>                           
            <br/>
            <br/>
            <h2>Descripción</h2>
            <h4>{producto.product_desc}</h4>    
            <br/>
        </form>
      </div>
    </div>
  );
}

export default Ver;