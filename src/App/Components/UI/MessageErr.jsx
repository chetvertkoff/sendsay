
import React from 'react';

const MessageErr = ({message})=> {
  return (
    <div className="message form__message">
      <div className="message__left-block">
        <svg className="icon icon_smile">
            <use xlinkHref="/assets/icon/sprite.svg#smile"></use>
        </svg>
      </div>
      <div className="message__right-block">
        <h4 className="h5 message__h5">Вход не вышел</h4>
        <p className="message__text">{message}</p>
      </div>
    </div>
  );
}

export default MessageErr;
