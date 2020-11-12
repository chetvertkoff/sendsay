import React from 'react';

const ConsoleHeader = () => {
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
      <div className="console__logout-button">
        Выйти 
        <svg className="icon">
          <use xlinkHref="/assets/icon/sprite.svg#log-out"></use>
        </svg>
      </div>
      <div className="console__fullscreen-button" tabIndex="0">
        <svg className="icon">
          <use xlinkHref="/assets/icon/sprite.svg#fullscreen-off"></use>
        </svg>
      </div>
    </div>
  );
}

export default ConsoleHeader;
