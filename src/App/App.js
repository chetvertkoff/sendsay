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
        {
          !isAuthorized() ? 
            <Route path="/login"  component={Auth} />
          :
           <Route path="/" exact component={Console} /> 
        }
      </Switch>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
