import React from 'react';
import ReactDOM from 'react-dom';
// import { Provider, useSelector, useDispatch } from './react-redux';
// import {createStore} from 'redux'
// Slomux - реализация Flux, в которой, как следует из названия, что-то сломано.
// Нужно починить то, что сломано, и подготовить Slomux к использованию на больших проектах, где крайне важна производительность

// ВНИМАНИЕ! Замена slomux на готовое решение не является решением задачи

let ReactReduxContext

export const createStore = (reducer, initialState, enhancer) => {

  if(typeof initialState === 'function' && typeof enhancer === 'undefined' ){
    enhancer = initialState
    initialState = undefined
  }

  if(typeof enhancer !== 'undefined'){
    return enhancer(createStore)(reducer, initialState)
  }

  let currentState = initialState ?? {}
  let listeners = []

  const getState = () => currentState
  const dispatch = action => {
    currentState = reducer(currentState, action)
    listeners.forEach(listener => listener())
    return action
  }

  const subscribe = listener => listeners.push(listener)

  return { getState, dispatch, subscribe }
}

export const applyMiddleware = (...middlewares) => {
  return createStore => (reducer, preloadedState) => {
    const store = createStore(reducer, preloadedState)
    let dispatch = store.dispatch

    const middlewareAPI = {
      getState: store.getState,
      dispatch: action => dispatch(action)
    } 
    const chain = middlewares.map(middleware => middleware(middlewareAPI))
    dispatch = chain[0]()(store.dispatch)

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
  console.log(ReactReduxContext);
  return <Context.Provider value={{ store }}>{children}</Context.Provider>
}

// APP
// actions

// const UPDATE_COUNTER = 'UPDATE_COUNTER'
// const CHANGE_STEP_SIZE = 'CHANGE_STEP_SIZE'

// // action creators
// const updateCounter = value => ({
//   type: UPDATE_COUNTER,
//   payload: value,
// })

// const changeStepSize = value => ({
//   type: CHANGE_STEP_SIZE,
//   payload: value,
// })


// // reducers
// const defaultState = {
//   counter: 1,
//   stepSize: 1,
// }

// const reducer = (state = defaultState, action) => {
//   switch(action.type) {
//     case UPDATE_COUNTER:
//       return {...state, counter: state.counter += action.payload}
//     case CHANGE_STEP_SIZE:
//       return {...state, stepSize: action.payload}
//     default:
//       return state
//   }
// }

// // ВНИМАНИЕ! Использование собственной реализации useSelector и dispatch обязательно
// const Counter = () => {
//   const counter = useSelector(state => state.counter)
//   const dispatch = useDispatch()

//   return (
//     <div>
//       <button onClick={() => dispatch(updateCounter(-1))}>-</button>
//       <span> {counter} </span>
//       <button onClick={() => dispatch(updateCounter(1))}>+</button>
//     </div>
//   )
// }

// const Step = () => {
//   const stepSize = useSelector(state => state.stepSize, (current, prev) => current === prev)
//   const dispatch = useDispatch()

//   return (
//     <div>
//       <div>Значение счётчика должно увеличиваться или уменьшаться на заданную величину шага</div>
//       <div>Текущая величина шага: {stepSize}</div>
//       <input
//         type="range"
//         min="1"
//         max="5"
//         value={stepSize}
//         onChange={({ target }) => dispatch(changeStepSize(target.value))}
//       />
//     </div>
//   )
// }

// ReactDOM.render(
//   <Provider store={createStore(reducer, defaultState)}>
//       <Step />
//       <Counter />
//   </Provider>,
//   document.getElementById('root')
// )
