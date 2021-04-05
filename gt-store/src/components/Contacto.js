import Menu from './Menu'
import { makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Formik } from "formik";

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
function Contacto() {
      const classes = useStyles();
  return (
    <div>
      <Menu/>
      <br/>
      <div className={classes.texto}>
      <h1>¡Contáctanos!</h1>
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Nombres" variant="outlined" />
            <br/>
            <TextField id="outlined-basic" label="Apellidos" variant="outlined" />
            <br/>
            <TextField id="outlined-basic" label="Correo electrónico" variant="outlined" />
            <br/>
            <TextField
                id="outlined-multiline-static"
                label="¿Algo que quieras preguntarnos?"
                multiline
                rows={4}
                defaultValue=""
                variant="outlined"
        />
          <br/>
        <Button variant="contained" color="primary">
            Enviar
        </Button>
        </form>
        <h3>¿Necesitas contactarnos ya?</h3>
        <h4>Correo electrónico: gtstore@store.com</h4>
        <h4>Whatsapp: 90909090</h4>
      </div>
    </div>
  );
}

export default Contacto;