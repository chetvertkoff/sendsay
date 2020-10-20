import React  from 'react';
import AuthForm from '../Components/AuthForm';
import { useHttp } from '../hooks/useHttp';
import Logo from './../Components/Logo';
import Sendsay from 'sendsay-api';
import getModel from './../Models/index';

// auth true
/*
{
  "request.id": "APP_UNAUTHORIZED_/signin_1602956793228_2020-10-17T20:47:08.129Z",
  "sublogin": "x_1602956168788399",
  "session": "x_1602956168788399/x_1602956168788399:wTrF4g2X-YeNOUz9YwC-gQf3UoL1j0VEJjU14h1dyVbQ:1602956828864164703.302642953915655.120490787365",
  "duration": 0.114138,
  "_ehid": "214141.891879354432.1602956828",
  "login": "x_1602956168788399"
}
*/

//auth false
/* 
{
  "request.id": "APP_UNAUTHORIZED_/signin_1602956754043_2020-10-17T20:46:04.699Z",
  "errors": [
    {
      "id": "error/auth/failed",
      "explain": "wrong_credentials"
    }
  ],
  "duration": 0.034268,
  "_ehid": "21171.8498446027489.1602956764"
}
*/

const Auth = ()=>{
  const {request, loading} = useHttp();
// https://api.sendsay.ru/
  const onSubmitForm = (formFields)=>{
    let sendsay = new Sendsay();
    sendsay.request({ action: 'sys.settings.get' }).then(function(res) {
      console.log(res);
    })
  } 

  return(
    <section className="auth">
      <div className="auth__container">
        <Logo />
        <AuthForm 
          loading={loading}
          onSubmitForm={onSubmitForm} 
        />
        <a href="https://github.com/chetvertkoff/sendsay" className="link auth__link">@chetvertkoff</a>
      </div>
    </section>
  )
}

export default Auth;