
import React from 'react';

const TextInput = props => {

  const sendVal = (e) =>{
    const text = e.target.value;
    props.getText(text);
  }

  return (
    <label className={`label form__label ${props.inValid && "label_invalid"}`}>
      <span className="label__text label__text_left">{props.labelText}</span>
      {
        props.optionText ? 
          <span className="label__text label__text_right label__text_option">{props.optionText}</span>
          :
          null
      }
      <input type={props.inputType || "text"} defaultValue={props.login || ""} onChange={props.getText && sendVal} className="form__input-text"/>
    </label>
  );
}

export default TextInput;
