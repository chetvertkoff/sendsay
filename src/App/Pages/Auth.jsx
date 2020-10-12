import React  from 'react';
import AuthForm from '../Components/AuthForm';
import Loader from '../Components/Loader';

const Auth = ()=>{
  return(
    <section className="auth">
      <div className="auth__container">
        <div className="logo auth__logo">
          <div className="logo__figure logo_ellipse"></div>
          <div className="logo__figure logo_rectangle1"></div>
          <div className="logo__figure logo_ellipse"></div>
          <div className="logo__figure logo_rectangle2"></div>
        </div>
        <form className="form auth__form">
          <h3 className="form__title">API-консолька</h3>
          <label className="label form__label">
            <span className="label__text_left">Логин</span>
            <input type="text" className="form__input-text"/>
          </label>
          <label className="label form__label">
            <span className="label__text label__text_left">Сублогин</span>
            <span className="label__text label__text_right label__text_option">Опционально</span>
            <input type="text" className="form__input-text"/>
          </label>
          <label className="label form__label">
            <span className="label__text_left">Пароль</span>
            <input type="password" className="form__input-text form__input-text_pass"/>
          </label>

          <button onClick={event=>event.preventDefault()} className="button form__button">
            <span>Вход</span>
            <Loader />
          </button>
        </form>
        <a href="https://github.com/chetvertkoff/sendsay" className="link auth__link">@chetvertkoff</a>
      </div>
    </section>
  )
}

export default Auth;