import React, { lazy, Suspense, useCallback } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
// import { applyMiddleware } from 'redux';
import { createStore, Provider, applyMiddleware, thunk } from '.././react-redux/'
// import thunk from 'redux-thunk'

import rootReducer from './Store/Reducer/rootReducer';
import useAuth from './hooks/useAuth';

const Auth = lazy(() => import("./Pages/Auth"));
const Console = lazy(() => import("./Pages/Console"));

const store = createStore(rootReducer, applyMiddleware(thunk))

const App = () => {
  const {isAuthorized} = useAuth();

  const isAuth = useCallback(() => {
    if(isAuthorized()) {
      return (
        <>
          <Route path="/" exact component={Console} />
          <Route render={() => <Redirect to="/" />} /> 
        </>
      )
    }

    return <Route path="/login" component={Auth} />
  }, [])

  return(
    <Switch>
      <Suspense fallback="">
        {isAuth()}
      </Suspense>
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
