import Menu from './Menu_adm'
import { makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {useEffect } from 'react';
import axios from 'axios';
import {
    Link
  } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    texto: {
      marginLeft: '30%',
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


function Editar() {
      const classes = useStyles();
      const [name, setName] = React.useState("?");
      const [precio, setPrecio] = React.useState(0);
      const [categoria, setCategoria] = React.useState("?");
      const [descripcion, setDescripcion] = React.useState("?");
      const [errorName, setErrorName] = React.useState("")
      const [errorPrecio, setErrorPrecio] = React.useState("")
      const [errorCategoria, setErrorCategoria] = React.useState("")
      const [errorDesc, setErrorDesc] = React.useState("")
      const [loading, setLoading] = React.useState(false);
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
        producto.product_foto=file.secure_url
        setLoading(false)
    }

    const enviar = async ()=>{
      if(name===undefined || name===""){
          setErrorName("Error: El campo no puede estar vacio")
      }
      if(precio===undefined || precio==="" ||precio==="0"){
        setErrorPrecio("Error: El campo no puede estar vacio")
      }
     if(categoria===undefined || categoria===""){
      setErrorCategoria("Error: El campo no puede estar vacio")
     }
     if(descripcion===undefined || descripcion===""){
      setErrorDesc("Error: El campo no puede estar vacio")
     }
     if(name!=="" && precio!=="" && categoria!=="" && descripcion!=="") {
      const data = new URLSearchParams()
      if(name!=="?"){
        data.append('name',name)
      }else{
        data.append('name',producto.product_name)
      }
      data.append('cod',producto.Cod_prod)
      if(categoria!=="?"){
      data.append('type',categoria)
      }else{
        data.append('type',producto.product_type)
      }
      if(precio!==0){
        data.append('price',precio)
      }else{
        data.append('price',producto.product_price)
      }
      if(descripcion!=="?"){
      data.append('desc',descripcion)
      }else{
        data.append('desc',producto.product_desc)
      }
      data.append('id',id)
      data.append('foto',producto.product_foto)
    await axios({
        method: 'PUT',
        url: 'http://EC2Co-EcsEl-5OOEYFX1RC2G-22735838.us-east-2.elb.amazonaws.com:4200/actualizar',
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
      <h1>Editar Producto</h1>
        <form className={classes.root} noValidate autoComplete="off">
        <input type="file" name="imagen" accept="image/*" onChange={e=>changeImagen(e)} />
        <img src={producto.product_foto} alt="vista previa"/>
            <TextField 
            id="outlined-basic" 
            value={name==="?"?producto.product_name:name} 
            error={!!errorName}
            onChange={e => setName(e.target.value)} 
            helpertext={errorName && errorName}
            variant="outlined" />
            <br/>
            <TextField 
            id="outlined-basic" 
            value={precio===0?producto.product_price:precio} 
            error={!!errorPrecio}
            onChange={e => setPrecio(e.target.value)} 
            helpertext={errorPrecio && errorPrecio}
            variant="outlined" />
            <br/>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={categoria==="?"?producto.product_type:categoria} 
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
            <TextField 
            id="outlined-basic" 
            value={descripcion==="?"?producto.product_desc:descripcion} 
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

export default Editar;