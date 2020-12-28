import React, { useState }  from 'react';
import { useHttp } from '../hooks/useHttp';
import getModel from './../Models/index';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';
import AuthForm from './../Components/Auth/AuthForm';
import Logo from './../Components/UI/Logo';

const Auth = ()=>{
  const {request} = useHttp();
  const [errMessage, setErrMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  // Логин: chetvertkoffkirill@gmail.com
  // Пароль: sa9Niqueng

  const reqLogin = async fields => {
    const {login, sublogin} = fields;
    const userInfo = JSON.stringify({login, sublogin});
    setLoading(true);
    const res = await request(fields);
    setLoading(false);
    if(!res.session) return res;
    Cookies.set('sendsay_session', res.session, { expires: 7 });
    localStorage.setItem('user_info', userInfo);
    
    return res;
  }

  const onSubmitForm = (formFields) => {
    const fields = getModel('AuthFields', formFields);
    Promise.resolve(reqLogin(fields))
     .then(res=>{
        if(res.explain){
          const {id, explain} = res;
          setErrMessage(JSON.stringify({id, explain}));
          return;
        }
        setErrMessage('');
        history.push('/');  
      })
  } 

  return(
    <section className="auth">
      <div className="auth__container">
        <Logo parentClass="auth__logo"/>
        <AuthForm 
          loading={loading}
          onSubmitForm={onSubmitForm} 
          errMessage={errMessage}
        />
        <a href="https://github.com/chetvertkoff/sendsay" className="link auth__link">@chetvertkoff</a>
      </div>
    </section>
  )
}

export default Auth;