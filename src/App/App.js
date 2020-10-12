import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Auth from './Pages/Auth';
import Console from './Pages/Console';

const App = ()=>{
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Console} /> 
        <Route path="/login"  component={Auth} />
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
