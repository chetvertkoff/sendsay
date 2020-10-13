import React  from 'react';
import Loader from './Loader';

const AuthForm = props => {
  return(
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
        <span className="button__text">Войти</span>
        <Loader />
      </button>
    </form>
  )
}

export default AuthForm;