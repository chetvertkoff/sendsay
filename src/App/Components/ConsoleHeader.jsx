import React from 'react';
import useAuth from '../hooks/useAuth';


const ConsoleHeader = () => {
  const {logOut} = useAuth();
  return (
    <div className="console__header console_block">
      <div className="logo console__logo">
        <div className="logo__figure logo_ellipse"></div>
        <div className="logo__figure logo_rectangle1"></div>
        <div className="logo__figure logo_ellipse"></div>
        <div className="logo__figure logo_rectangle2"></div>
      </div>
      <h3 className="console__logo-title">API-консолька</h3>
      <div className="console__user-email">
        <span>some@email.com</span>
        <span>sublogin</span>
      </div>
      <button className="console__logout-button" onClick={logOut}>
        Выйти 
        <svg className="icon">
          <use xlinkHref="/assets/icon/sprite.svg#log-out"></use>
        </svg>
      </button>
      <div className="console__fullscreen-button">
        <svg className="icon">
          <use xlinkHref="/assets/icon/sprite.svg#fullscreen-off"></use>
        </svg>
      </div>
    </div>
  );
}

export default ConsoleHeader;
