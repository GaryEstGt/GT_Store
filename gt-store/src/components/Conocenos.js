import MenuR from './MenuR'
import { makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    texto: {
      marginLeft: "15%",
    },
  }));
function Conocenos() {
      const classes = useStyles();
  return (
    <div>
      <MenuR/>
      <br/>
      <br/>
      <br/>
      <div className={classes.texto}>
      <h1>¡Conócenos!</h1>
      <p>
          Somos una empresa de venta de electrónicos. Vendemos todo tipo de laptops, computadoras de escritorio
      </p>
      <p>
          dispostivos de audio y repuestos para tus tus dispostivos electrónicos. Vendemos producto de alta calidad
      </p>
      <p>
          los cuales son exportados desde distintos paises del mundo buscando la mayor calidad y el mejor precio.
      </p>
      <p>
          En esta página puedes visualizar todos los productos que vendemos, esta página aun está en construcción.
      </p>

          <h3>¡Pronto podrás comprar nuestros productos online!</h3>

      </div>
    </div>
  );
}

export default Conocenos;