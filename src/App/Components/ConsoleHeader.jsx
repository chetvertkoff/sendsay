import fscreen from 'fscreen';
import React, { useCallback, useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import Logo from './Logo';

const ConsoleHeader = props => {
  const [isFullscreen, setFullScreen] = useState(false);
  const {logOut} = useAuth();
  const {login, sublogin} = JSON.parse(localStorage.getItem('user_info'));

  useEffect(()=>{
    const fullScreenCancelOnEscPress = () => {
      setFullScreen(!!fscreen.fullscreenElement);
    }
    fscreen.addEventListener('fullscreenchange', fullScreenCancelOnEscPress);
    return ()=>{
      fscreen.removeEventListener('fullscreenchange', fullScreenCancelOnEscPress);
    }
  },[]);

  const toggleFullscreen = useCallback(() => {
    const el = props.el.current;
    if(!fscreen.fullscreenElement){
      fscreen.requestFullscreen(el);
    }else{
      fscreen.exitFullscreen();
    }
  },[]);

  return (
    <div className="console__header console_block">
      <Logo parentClass="console__logo"/>
      <h3 className="console__logo-title">API-консолька</h3>
      <div className="console__user-email">
        <span>{login}</span>
        {login && sublogin && <span className="console__delimiter">:</span>}
        <span>{sublogin}</span>
      </div>
      <button className="console__logout-button" onClick={logOut}>
        Выйти 
        <svg className="icon">
          <use xlinkHref="/assets/icon/sprite.svg#log-out"></use>
        </svg>
      </button>
      <div className="console__fullscreen-button" onClick={toggleFullscreen}>
        <svg className="icon">
          <use 
            xlinkHref={`/assets/icon/sprite.svg#fullscreen-${isFullscreen ? "on" : "off" }`}
          ></use>
        </svg>
      </div>
    </div>
  );
}

export default ConsoleHeader;
