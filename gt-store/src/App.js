import './App.css';
import Home from './components/Home'
import Category from './components/Category'
import VerProducto from './components/VerProducto'
import Conocenos from './components/Conocenos'
import Contacto from './components/Contacto'
import Login from './components/Login'
import Homeadm from './components/Home_adm'
import AdminProds from './components/Admin_Productos'
import Nuevo from './components/NuevoProducto'
import Editar from './components/EditarProducto'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/editar">
            <Editar />
          </Route>
          <Route path="/verproducto">
            <VerProducto />
          </Route>
          <Route path="/category">
            <Category />
          </Route>
          <Route path="/conocenos">
            <Conocenos />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home-adm">
            <Homeadm />
          </Route> 
          <Route path="/adm-prod">
            <AdminProds />
          </Route>  
          <Route path="/nuevo">
            <Nuevo />
          </Route>          
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
