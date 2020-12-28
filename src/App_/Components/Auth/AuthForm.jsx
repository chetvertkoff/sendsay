import React, { useState }  from 'react';
import Validate from '../../utils/validate';
import Button from '../UI/Button';
import MessageErr from '../UI/MessageErr';
import TextInput from '../UI/TextInput';
import getModel from '../../Models';

const AuthForm = props => {
  const [state, setState] = useState({
    fields:{
      login: getModel('FormFields'),
      sublogin: getModel('FormFields'),
      password: getModel('FormFields')
    },
    isErr: false
  })

  const {login, sublogin, password} = state.fields;

  const getFieldVal = (obj) => {
    const {type, val, err} = Validate.isValidField(obj);
    let fields = {...state.fields};
    let isErr = false;
    fields[type] = {val, err};
    for(let field in fields){
      if(fields[field].err) isErr = true;
    }
    setState({fields, isErr});
  }

  const getFormData = () => {
    const validatedState = {...Validate.isValidForm(state)};
    if(!validatedState.isErr){
      props.onSubmitForm(validatedState.fields);
      setState(validatedState);
      return;
    }
    setState({...validatedState, isErr: true});
  }
  
  return(
    <form className="form auth__form">
      <h3 className="form__title">API-консолька</h3>
      {props.errMessage && <MessageErr message={props.errMessage} />} 
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
        value={sublogin.val} 
        inValid={sublogin.err}
        optionText="Опционально" 
        getText={val=>getFieldVal({val,type: 'sublogin'})} 
      />
      <TextInput 
        labelText="Пароль" 
        inputType="password" 
        value={password.val} 
        inValid={password.err} 
        getText={val=>getFieldVal({val,type: 'password'})} 
      />
      <Button 
        disabled={state.isErr}
        loading={props.loading} 
        onClick={getFormData} 
        title="Войти" 
        classes={['form__button']}
      />
    </form>
  )
}

export default AuthForm;