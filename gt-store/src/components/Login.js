import Menu from './Menu'
import { makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
        <Button variant="contained" color="primary">
            Iniciar Sesión
        </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;