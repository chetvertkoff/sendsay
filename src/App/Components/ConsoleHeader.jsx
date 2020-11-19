import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import Logo from './Logo';

const ConsoleHeader = () => {
  const [isFullscreen, setFullScreen] = useState(false);
  const [isInitialMount, setMount] = useState(true);
  const {logOut} = useAuth();
  const {login, sublogin} = JSON.parse(localStorage.getItem('user_info'));

  useEffect(()=>{
    if(isInitialMount){
      document.addEventListener('keydown', fullScreenCancelOnEscPress);
      return setMount(false)
    };

    if(isFullscreen) fullScreen();
    else fullScreenCancel();

    return ()=>{
      document.removeEventListener('keydown', fullScreenCancelOnEscPress);
      fullScreenCancel();
      setFullScreen(false);
    }
  }, [isFullscreen]);

  const fullScreenCancelOnEscPress = e => {
    console.log(e);
    // console.log(isFullscreen);
    // if(e.which == 27 && isFullscreen){
    //   setFullScreen(false);
    // }
  }

  const fullScreen = () => {
    const element = document.documentElement;
    if(element.requestFullscreen) {
      element.requestFullscreen();
    } else if(element.webkitrequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if(element.mozRequestFullscreen) {
      element.mozRequestFullScreen();
    }
  }

  const fullScreenCancel = () => {
    const document = window.document;
    if(!document.fullscreen) return;
    if(document.exitFullscreen) {
      console.log(2);
      document.exitFullscreen();
    } else if(document.webkitExitFullscreen ) {
      document.webkitExitFullscreen();
    } else if(document.mozExitFullscreen) {
      document.mozexitFullscreen();
    }
  }  

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
      <div className="console__fullscreen-button" onClick={()=>setFullScreen(!isFullscreen)}>
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
