import React, { useState }  from 'react';
import getModel from '../utils/Factory';
import Validate from '../utils/validate';
import Button from './UI/Button';
import MessageErr from './UI/MessageErr';
import TextInput from './UI/TextInput';

const AuthForm = props => {

  const [state, setState] = useState({
    fields:{
      login: getModel('formFields'),
      subLgn: getModel('formFields'),
      pass: getModel('formFields')
    },
    isErr: false
  })

  const {login, subLgn, pass} = state.fields;

  const getFieldVal = (obj)=>{
    const {type, val, err} = Validate.isValidField(obj);
    let fields = {...state.fields};
    fields[type] = {val, err};
    setState({...state, fields, isErr: err});
  }

  const getFormData = () => {
    const validatedState = {...Validate.isValidForm(state)};
    setState(validatedState);
    if(!validatedState.isErr){
      
    }
  }

  return(
    <form className="form auth__form">
      <h3 className="form__title">API-консолька</h3>
      {/* <MessageErr /> */}
      <TextInput 
        labelText="Логин" 
        inputType="text" 
        value={login.val} 
        inValid={login.err}
        getText={val=>getFieldVal({val,type: 'login'})} 
      />
      <TextInput 
        labelText="Сублогин" 
        inputType="text" 
        value={subLgn.val} 
        inValid={subLgn.err}
        optionText="Опционально" 
        getText={val=>getFieldVal({val,type: 'subLgn'})} 
      />
      <TextInput 
        labelText="Пароль" 
        inputType="password" 
        value={pass.val} 
        inValid={pass.err} 
        getText={val=>getFieldVal({val,type: 'pass'})} 
      />
      <Button 
        disabled={state.isErr}
        load={false} 
        onClick={getFormData} 
        title="Войти" 
      />
    </form>
  )
}

export default AuthForm;