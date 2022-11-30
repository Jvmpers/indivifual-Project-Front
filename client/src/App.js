import './App.css';
import React from "react";
import {Route, Switch, Link} from "react-router-dom";
import InfoDog from './Components/InfoDog';
import Nav from './Components/Nav';
import CrearRaza from './Components/CrearRaza';
import Home from './Components/Home';
import Landing from './Components/Landing';
function App() {
  return (
    <div className="App">
      <React.Fragment>
      <Route  path={'/dogs'} component={Nav}></Route> 
      <Switch>
      <Route  exact path={'/'} component={Landing}></Route> 
      <Route  exact path={'/dogs/create'} component={CrearRaza}></Route>
       <Route  exact path={'/dogs'}><Home/></Route>
      <Route  exact path={'/dogs/:id'} component={InfoDog}></Route>
      </Switch>
      </React.Fragment>
    </div>

  );
}

export default App;
