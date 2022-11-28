import './App.css';
import React from "react";
import {Route, Switch, Link} from "react-router-dom";
import InfoRaza from './Components/InfoRaza';
import Nav from './Components/Nav';
import CrearRaza from './Components/CrearRaza';
import Home from './Components/Home';
import Landing from './Components/Landing';
function App() {
  return (
    <div className="App">
      <React.Fragment>
      <Route  path={'/perros'} component={Nav}></Route> 
      <Switch>
      <Route  exact path={'/'} component={Landing}></Route> 
      <Route  exact path={'/perros/crear'} component={CrearRaza}></Route>
       <Route  exact path={'/perros'}><Home/></Route>
      <Route  exact path={'/perros/:id'} component={InfoRaza}></Route>
      </Switch>
      </React.Fragment>
    </div>

  );
}

export default App;
