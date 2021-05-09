import MenuR from './MenuR'
import { makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import * as React from 'react';
import axios from 'axios';
import {
  Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    texto: {
    marginLeft:"30%",
    marginTop: "5%"
    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: "50%",
        },
    },
    linki:{
      textDecoration: 'none',
      outline: 'none',
      color: 'white',
  },
  boton: {
    flexGrow: 1,
    width: "50%",
  },
  }));

function Login() {
      const classes = useStyles();
      const [usuario, setUsuario] = React.useState("");
      const [password, setPassword] = React.useState("");
      const [errorUsuario, setErrorUsuario] = React.useState("");
      const [errorPassword, setErrorPassword] = React.useState("");

      async function iniciarSesion(){

        if(usuario===""){
          setErrorUsuario("Debe ingresar un usuario")
        }
        if(password===""){
          setErrorPassword("Debe ingresar una contraseña")
        }
        if(usuario!=="" && password!==""){
          const data = new URLSearchParams()
          data.append('usuario',usuario)
          data.append('contrasena',password)
          await axios({
            method: 'POST',
            url: 'http://EC2Co-EcsEl-5OOEYFX1RC2G-22735838.us-east-2.elb.amazonaws.com:4200/autenticar',
            data: data
          })
          .then(function (response) {
            console.log(response)
            if(response.data.mensaje==="Usuario correcto"){
            localStorage.setItem('token', response.data.token);
            window.location.href = '/home-adm';
            }
            else{
              alert(response.data.mensaje)
            }
          })
          .catch(function (error) {
            console.log(error);
            alert("error de envío "+error)
          });
        }
      }

  return (
    <div>
      <MenuR/>
      <br/>
      <br/>
      <br/>
      <div className={classes.texto}>
      <h1>Iniciar Sesión</h1>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField 
            id="outlined-basic" 
            label="Usuario" 
            variant="outlined"
            error={!!errorUsuario}
            helpertext={errorUsuario && errorUsuario}
            onChange={e => 
                setUsuario(e.target.value)} 
             />
            <br/>
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                onChange={e => 
                setPassword(e.target.value)} 
                error={!!errorPassword}
                helpertext={errorPassword && errorPassword}
        />
            <br/>
              <Button variant="contained" color="primary" className={classes.boton} onClick={iniciarSesion}>
                Iniciar Sesión
              </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;