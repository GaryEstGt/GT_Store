import MenuR from './MenuR'
import { makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Formik } from "formik";
import * as React from 'react';

const useStyles = makeStyles((theme) => ({
    texto: {
      marginLeft: "35%"
    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: "50%"
        },
    },
  }));
function Contacto() {
      const classes = useStyles();
      const [Nombre, setNombre] = React.useState("");
      const [Apellido, setApellido] = React.useState("");
      const [Correo, setCorreo] = React.useState("");
      const [descripcion, setDescripcion] = React.useState("");
      const [errorNombre, seterrorNombre] = React.useState("");
      const [errorApellido, seterrorApellido] = React.useState("");
      const [errorCorreo, seterrorCorreo] = React.useState("");
      const [errordescripcion, seterrorDescripcion] = React.useState("");
      const enviar = async ()=>{
        if(Nombre==="" || Nombre.length===0){
            seterrorNombre("Error: El campo no puede estar vacio")
        }
        if(Apellido==="" || Apellido.length===0){
          seterrorApellido("Error: El campo no puede estar vacio")
      }
        if(Correo==="" || Correo.length===0){
          seterrorCorreo("Error: El campo no puede estar vacio")
        }
       if(descripcion==="" || descripcion.length===0){
        seterrorDescripcion("Error: El campo no puede estar vacio")
       }
        if(Nombre!=="" && Apellido!=="" && Correo!=="" && descripcion!=="") {
          alert('solicitud de contacto enviada')
          window.location.href = '/';
        }
      }
  return (
    <div>
      <MenuR/>
      <br/>
      <br/>
      <br/>
      <div className={classes.texto}>
      <h1>¡Contáctanos!</h1>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField 
            id="outlined-basic" 
            label="Nombres" 
            variant="outlined"
            error={!!errorNombre}
             onChange={e => 
            setNombre(e.target.value)} /> 
            <br/>
            <TextField 
            id="outlined-basic" 
            label="Apellidos" 
            variant="outlined"
            onChange={e => 
            setApellido(e.target.value)} 
            error={!!errorApellido} />

            <br/>
            <TextField 
            id="outlined-basic" 
            label="Correo electrónico" 
            variant="outlined" 
            onChange={e => 
            setCorreo(e.target.value)}
            error={!!errorCorreo} 
            />

            <br/>
            <TextField
                id="outlined-multiline-static"
                label="¿Algo que quieras preguntarnos?"
                multiline
                rows={4}
                defaultValue=""
                variant="outlined"
                onChange={e => 
              setDescripcion(e.target.value)} 
              error={!!errordescripcion}
        />
          <br/>
        <Button variant="contained" color="primary" onClick={enviar}>
            Enviar
        </Button>
        </form>
        <h3>¿Necesitas contactarnos ya?</h3>
        <h4>Correo electrónico: gtstore@gmail.com</h4>
        <h4>Whatsapp: 90909090</h4>
      </div>
    </div>
  );
}

export default Contacto;