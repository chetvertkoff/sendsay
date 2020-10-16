import React, { isValidElement, useState }  from 'react';
import getModel from '../utils/Factory';
import isValid from '../utils/validate';
import Validate from '../utils/validate';
import Button from './UI/Button';
import MessageErr from './UI/MessageErr';
import TextInput from './UI/TextInput';

const AuthForm = props => {

  const [state, setState] = useState({
    login: getModel('formFields'),
    subLgn: getModel('formFields'),
    pass: getModel('formFields'),
    isErr: false
  })


  const getFieldVal = (obj)=>{
    const {type, val, err} = isValid(obj);
    setState({...state, [type]:{val, err}, err});
  }

  const getFormData = () => {
    console.log(state);
  }

  return(
    <form className="form auth__form">
      <h3 className="form__title">API-консолька</h3>
      {/* <MessageErr /> */}
      <TextInput 
        labelText="Логин" 
        inputType="text" 
        value={state.login.val} 
        inValid={state.login.err}
        getText={val=>getFieldVal({val,type: 'login'})} 
      />
      <TextInput 
        labelText="Сублогин" 
        inputType="text" 
        value={state.subLgn.val} 
        inValid={state.subLgn.err}
        optionText="Опционально" 
        getText={val=>getFieldVal({val,type: 'subLgn'})} 
      />
      <TextInput 
        labelText="Пароль" 
        inputType="password" 
        value={state.pass.val} 
        inValid={state.pass.err} 
        getText={val=>getFieldVal({val,type: 'pass'})} 
      />
      <Button load={false} onClick={getFormData} title="Войти" />
    </form>
  )
}

export default AuthForm;