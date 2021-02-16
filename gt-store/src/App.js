import './App.css';
import Home from './components/Home'
import Category from './components/Category'
import Conocenos from './components/Conocenos'
import Contacto from './components/Contacto'
import Login from './components/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
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
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
