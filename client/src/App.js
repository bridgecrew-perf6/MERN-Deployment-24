import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import {Switch, Route} from "react-router-dom";
//import views:
import Main from './views/Main';
import Create from './views/Create';
import SinglePirate from './views/SinglePirate'

function App() {
  return (
    <div className="App">
      <Switch>
        
        <Route exact path="/">
          <Main/>
        </Route>

        <Route exact path="/pirates/create">
          <Create/>
        </Route>

        <Route exact path="/pirates/:_id">
          <SinglePirate/>
        </Route>

      </Switch>
    </div>
  );
}

export default App;
