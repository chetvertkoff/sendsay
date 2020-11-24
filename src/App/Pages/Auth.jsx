import React, { useEffect, useState }  from 'react';
import AuthForm from '../Components/AuthForm';
import { useHttp } from '../hooks/useHttp';
import Logo from './../Components/Logo';
import getModel from './../Models/index';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';

const Auth = ()=>{
  const {loading, request} = useHttp();
  const [errMessage, setErrMessage] = useState('');
  const history = useHistory();

  // Логин: chetvertkoffkirill@gmail.com
  // Пароль: sa9Niqueng

  const reqLogin = async fields => {
    const {login, sublogin} = fields;
    const userInfo = JSON.stringify({login, sublogin});
    const res = await request(fields);

    if(!res.session) return res;
    Cookies.set('sendsay_session', res.session, { expires: 7 });
    localStorage.setItem('user_info', userInfo);
    
    return res;
  }

  const onSubmitForm = (formFields)=>{
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