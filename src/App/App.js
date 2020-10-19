import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import useAuth from './hooks/useAuth';
import Auth from './Pages/Auth';
import Console from './Pages/Console';

const App = ()=>{
  const {isAuthorized} = useAuth();
  
  return(
    <Switch>
      {isAuthorized() ? 
          <Route path="/" exact component={Console} /> 
        :
          <Route path="/login"  component={Auth} />}
    </Switch>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
