import React  from 'react';
import Loader from './Loader';

const AuthForm = props => {
  return(
    <form className="form auth__form">
      <h3 className="form__title">API-консолька</h3>
      <div className="message form__message">
        <div className="message__left-block">
          <svg className="icon icon_smile">
              <use xlinkHref="/assets/icon/sprite.svg#smile"></use>
          </svg>
        </div>
        <div className="message__right-block">
          <h4 className="h5 message__h5">Вход не вышел</h4>
          <p className="message__text">id: "error/auth/failed", explain: "wrong_credentials"</p>
        </div>
      </div>
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