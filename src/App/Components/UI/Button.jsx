
import React from 'react';
import Loader from '../Loader'

const Button = props => {
  const clickEvent = (e)=>{
    e.preventDefault(); 
    props.onClick && props.onClick()
  }

  let classes = ['button', ...props.classes];

  if(props.disabled) classes.push('button_disabled');
  else classes = classes.filter(el=>el!=='button_disabled');

  return (
    <button onClick={clickEvent} className={classes.join(' ')}>
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
