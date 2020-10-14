import React, { useState }  from 'react';
import Button from './UI/Button';
import MessageErr from './UI/MessageErr';
import TextInput from './UI/TextInput';

const AuthForm = props => {

  const [login, setLogin] = useState({val:"", err: false});
  const [subLgn, setSubLgn] = useState({val:"", err: false});
  const [pass, setPass] = useState({val:"", err: false});

  const checkField = val => {
    
  }

  const validateFields = val =>{
    let isValid;
    if(!validateField(login.val)){
      setLogin({...login, err: true});
      isValid = false;
    }
    if(!validateField(subLgn.val)){
      setSubLgn({...subLgn, err: true});
    }
    if(!validateField(pass.val)){
      setPass({...pass, err: true});
    }
  }

  const getFormData = () => {

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
        getText={val=>setLogin({...login,val})} 
      />
      <TextInput 
        labelText="Сублогин" 
        inputType="text" 
        value={subLgn.val} 
        inValid={subLgn.err}
        optionText="Опционально" 
        getText={val=>setSubLgn({...subLgn,val})} 
      />
      <TextInput 
        labelText="Пароль" 
        inputType="password" 
        value={pass.val} 
        inValid={pass.err} 
        getText={val=>setPass({...pass,val})} 
      />
      <Button load={false} onClick={getFormData} title="Войти" />
    </form>
  )
}

export default AuthForm;