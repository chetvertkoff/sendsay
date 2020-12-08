import React from 'react';

let ReactReduxContext

export const createStore = (reducer, initialState, enhancer) => {
  if(typeof initialState === 'function' && typeof enhancer === 'undefined' ){
    enhancer = initialState
    initialState = undefined
  }

  if(typeof enhancer !== 'undefined'){
    return enhancer(createStore)(reducer, initialState)
  }

  let currentState = initialState
  let listeners = []

  const getState = () => currentState
  const dispatch = action => {
    currentState = reducer(currentState, action)
    listeners.forEach(listener => listener())
    return action
  }
  const subscribe = listener => listeners.push(listener)

  dispatch({type: 'init'})

  return { getState, dispatch, subscribe }
}

export const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }

  return next(action);
}

export const applyMiddleware = (...middlewares) => {
  return createStore => (reducer, preloadedState) => {
    const store = createStore(reducer, preloadedState)

    const middlewareAPI = {
      getState: store.getState,
      dispatch: action => dispatch(action)
    } 
    const chain = middlewares.map(middleware => middleware(middlewareAPI))
    const dispatch = chain[0](store.dispatch)

    return { 
      ...store,
      dispatch
    }
  }
}

export const useSelector = selector => {
  const {store} = React.useContext(ReactReduxContext)
  const [, update] = React.useState();

  const prevSelector = React.useRef()
  const prevState = React.useRef()
  const prevSelectedState = React.useRef()
  let selectedState

  if(
    prevSelector.current !== selector ||
    prevState.current !== store.getState() ||
    prevSelectedState.current !== selector(store.getState())
  ){
    selectedState = selector(store.getState(), selector(store.getState()))
    prevSelectedState.current = selectedState
  }else{
    selectedState = prevSelectedState.current
  }

  const updateState = React.useCallback(()=>update({}), [])

  const forceUpdate = React.useCallback(()=>{
    if(prevSelectedState.current !== selector(store.getState())){
      updateState()
    }
  } ,[])

  React.useEffect(()=>{
    prevSelector.current = selector
    prevState.current = store.getState()
    prevSelectedState.current = selector(prevState.current)
    store.subscribe(forceUpdate)
  }, [])

  return selectedState
}

export const useDispatch = () => {
  const ctx = React.useContext(ReactReduxContext)
  return ctx.store.dispatch
}

export const Provider = ({ store, context, children }) => {
  const Context = context || React.createContext()
  ReactReduxContext = Context
  return <Context.Provider value={{ store }}>{children}</Context.Provider>
}