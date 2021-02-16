import Menu from './Menu'
import ListaCategoria from './ListaCategorias'
import Productos from './Productos'
import Grid from '@material-ui/core/Grid'


function Category() {
  return (
    <div className="Category">
      <Menu/>
      <br/>
      <Grid container spacing={3}>
      <Grid item xs={3}>
        <ListaCategoria/>
      </Grid>
      <Grid item xs={9}>
      <table class="default">
            <tr>
                <td><Productos/></td>
                <td><Productos/></td>
                <td><Productos/></td>
                <td><Productos/></td>
            </tr>
            <tr>
                <td><Productos/></td>
                <td><Productos/></td>
                <td><Productos/></td>
                <td><Productos/></td>
            </tr>
            <tr>

                <td><Productos/></td>
                <td><Productos/></td>
                <td><Productos/></td>
                <td><Productos/></td>

            </tr>
        </table>
      </Grid>
      </Grid>   
    </div>
  );
}

export default Category;