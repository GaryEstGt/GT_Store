import Menu from './Menu'
import { makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {
  Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    texto: {
    marginLeft:425
    },
    root: {
        '& > *': {
          margin: theme.spacing(1),
          width: 450,
        },
    },
    linki:{
      textDecoration: 'none',
      outline: 'none',
      color: 'white',
  },
  boton: {
    flexGrow: 1,
    width: 450,
  },
  }));
function Login() {
      const classes = useStyles();
  return (
    <div>
      <Menu/>
      <br/>
      <div className={classes.texto}>
      <h1>Iniciar Sesión</h1>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Usuario" variant="outlined" />
            <br/>
            <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
        />
            <br/>
            <Link to="/home-adm" className={classes.linki}>
              <Button variant="contained" color="primary" className={classes.boton}>
                Iniciar Sesión
              </Button>
            </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;