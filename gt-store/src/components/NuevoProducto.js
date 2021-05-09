import Menu from './Menu_adm'
import { makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import axios from 'axios';

import {
    Link
  } from "react-router-dom";

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
      marginLeft:"2%",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  }));

function Nuevo() {
      const classes = useStyles();
      const [cod, setCod] = React.useState("");
      const [name, setName] = React.useState("");
      const [precio, setPrecio] = React.useState(0);
      const [categoria, setCategoria] = React.useState("");
      const [descripcion, setDescripcion] = React.useState("");
      const [errorName, setErrorName] = React.useState("")
      const [errorPrecio, setErrorPrecio] = React.useState("")
      const [errorCategoria, setErrorCategoria] = React.useState("")
      const [errorDesc, setErrorDesc] = React.useState("")
      const [errorCod, setErrorCod] = React.useState("")
      const [Imagen, setImagen] = React.useState("");
      const [loading, setLoading] = React.useState(false);

      //OBTENIENDO LA IMAGEN
      const changeImagen = async e => {
          const files=e.target.files
          const data = new FormData()
          data.append('file',files[0])
          data.append('upload_preset','sample')
          setLoading(true)
          const res = await fetch("https://api.cloudinary.com/v1_1/dx1luyfjj/image/upload",
          {
          method: 'POST',
          body: data
          })
          const file=await res.json()
          console.log(file)
          setImagen(file.secure_url)
          setLoading(false)
      }
    const enviar = async ()=>{
      if(cod===undefined || cod.length===0){
          setErrorCod("Error: El campo no puede estar vacio")
      }
      if(name===undefined || name.length===0){
        setErrorName("Error: El campo no puede estar vacio")
    }
      if(precio===undefined || precio.length===0 || precio=="0"){
        setErrorPrecio("Error: El campo no puede estar vacio")
      }
     if(categoria===undefined || categoria.length===0){
      setErrorCategoria("Error: El campo no puede estar vacio")
     }
     if(descripcion===undefined || descripcion.length===0){
      setErrorDesc("Error: El campo no puede estar vacio")
     }
     if(Imagen===""){
       setImagen("https://drive.google.com/uc?id=1IJNxOkF_2PQ9UmevXMBIcm9bQ3owGIwv")
     }
      if(name!=="" && precio!=="" && categoria!=="" && descripcion!=="") {
        const data = new URLSearchParams()
        data.append('name',name)
        data.append('cod',cod)
        data.append('type',categoria)
        data.append('price',precio)
        data.append('desc',descripcion)
        data.append('foto',Imagen)
      await axios({
          method: 'POST',
          url: 'http://EC2Co-EcsEl-5OOEYFX1RC2G-22735838.us-east-2.elb.amazonaws.com:4200/crear',
          data: data
      })
      .then(function (response) {
          console.log(response);
          window.location.href = '/adm-prod';
      })
      .catch(function (error) {
          console.log(error);
          alert("error de envío "+error)
      });
      }
    }

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
      <h1>Agregar Producto</h1>
        <form className={classes.root} noValidate autoComplete="off">
        <input type="file" name="imagen" accept="image/*" onChange={e=>changeImagen(e)} />
        {
          loading?(<h5>Cargando...</h5>):(<img src={Imagen} alt="vista previa"/>)
        }
        <TextField id="outlined-basic" 
            label="Codigo" 
            value={cod} 
            error={!!errorCod}
            onChange={e => 
            setCod(e.target.value)} 
            helpertext={errorCod && errorCod}
            variant="outlined" />
            <br/>
            <TextField id="outlined-basic" 
            label="Nombre" 
            value={name} 
            error={!!errorName}
            onChange={e => 
            setName(e.target.value)} 
            helpertext={errorName && errorName}
            variant="outlined" />
            <br/>
            <TextField id="outlined-basic" 
            label="Precio" 
            value={precio} 
            type="number"
            error={!!errorPrecio}
            onChange={e => setPrecio(e.target.value)} 
            helpertext={errorPrecio && errorPrecio}
            variant="outlined" />
            <br/>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={categoria}
              error={!!errorCategoria}
              onChange={e => setCategoria(e.target.value)}
              helpertext={errorCategoria && errorCategoria}
            >
             <MenuItem value={"Laptop"}>Laptop</MenuItem>
              <MenuItem value={"Smartphone"}>Smartphone</MenuItem>
              <MenuItem value={"Perifericos"}>Perifericos</MenuItem>
              <MenuItem value={"Cableado"}>Cableado</MenuItem>
            </Select>
            <br/>
            <TextField id="outlined-basic" 
            label="Descripcion" 
            value={descripcion}
            error={!!errorDesc} 
            onChange={e => setDescripcion(e.target.value)} 
            helpertext={errorDesc && errorDesc}
            variant="outlined" />
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