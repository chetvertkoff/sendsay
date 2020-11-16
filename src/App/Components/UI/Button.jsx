
import React from 'react';
import Loader from '../Loader'

const Button = props => {
  const clickEvent = (e)=>{
    e.preventDefault(); 
    props.onClick && props.onClick()
  }

  const className = ['button', ...props.classes];

  if(props.disabled) className.push('button_disabled');
  else className = classN

  return (
    <button onClick={clickEvent} className={`button form__button ${props.disabled && "button_disabled"}`}>
      {
        props.loading ? 
          <Loader />
        : 
          <span className="button__text">{props.title}</span>
      }
    </button>
  );
}

export default Button;
