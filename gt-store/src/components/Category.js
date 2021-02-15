import Menu from './Menu'
import ListaCategoria from './ListaCategorias'
import Productos from './Productos'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles({
    productos: {
      float: 'center',
      marginLeft: 500,
      display: 'inline-block',
    },
    categorias: {
        float: 'left',
        marginRight: 1000,
        display: 'inline-block',
      },
  });

function Category() {
    const classes = useStyles();
  return (
    <div className="Category">
      <Menu/>
      <br/>
      <div className={classes.productos}>
        <Productos/>
      </div>
      <div className={classes.categorias}>
        <ListaCategoria/>
      </div>
      
    </div>
  );
}

export default Category;