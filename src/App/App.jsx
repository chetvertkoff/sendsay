import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import rootReducer from './Store/Reducer/rootReducer';
import useAuth from './hooks/useAuth';
import Auth from './Pages/Auth';
import Console from './Pages/Console';

const store = createStore(rootReducer, applyMiddleware(thunk))

const App = ()=>{
  const {isAuthorized} = useAuth();

  const isAuth = () => {
    if(isAuthorized()) {
      return (
        <>
          <Route path="/" exact component={Console} />
          <Route render={() => <Redirect to="/" />} /> 
        </>
      )
    }
    return <Route path="/login" component={Auth} />
  }

  return(
    <Switch>
      {isAuth()}
    </Switch>
  );
}

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(
  app,
  document.getElementById('root')
);
