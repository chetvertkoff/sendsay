import React  from 'react';
import AuthForm from '../Components/AuthForm';

const Logo = () => {
  return (
    <div className="logo auth__logo">
      <div className="logo__figure logo_ellipse"></div>
      <div className="logo__figure logo_rectangle1"></div>
      <div className="logo__figure logo_ellipse"></div>
      <div className="logo__figure logo_rectangle2"></div>
    </div>
  )
}

const Auth = ()=>{
  
  return(
    <section className="auth">
      <div className="auth__container">
        <Logo />
        <AuthForm />
        <a href="https://github.com/chetvertkoff/sendsay" className="link auth__link">@chetvertkoff</a>
      </div>
    </section>
  )
}

export default Auth;