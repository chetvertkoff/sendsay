import React, { useEffect, useRef, useState } from 'react';
import ConsoleReqHistoryItem from './ConsoleReqHistoryItem';
import ReqDropCard from './UI/ReqDropCard';

const ConsoleReqHistory = () => {

  const [style, setStyle] = useState({visibility: "hidden"});
  const el = useRef(null);

  const scroll = e => { 
    let item = el.current;
    const optionsUI = JSON.parse(localStorage.getItem('optionsUI')) || {};

    if(!optionsUI.scrollPos) optionsUI.scrollPos = 0;
    if(!item.style.transform){
      item.style.transform = `translateX(-${optionsUI.scrollPos}%)`;
      return;
    }
    console.log(item.offsetWidth);
    console.log(window.innerWidth);
    const currentWidth = item.offsetWidth-window.innerWidth+105;
    const direction = e.deltaY;
    const style = window.getComputedStyle(item);
    const matrix = new WebKitCSSMatrix(style.webkitTransform);
    const translateX = -matrix.m41;

    if(direction > 0) optionsUI.scrollPos = translateX+115;
    else optionsUI.scrollPos = translateX-100;

    if(optionsUI.scrollPos > currentWidth || optionsUI.scrollPos < 0) return;

    item.style.transform = `translateX(-${optionsUI.scrollPos}px)`;
    // localStorage.setItem('optionsUI', JSON.stringify({...optionsUI, scrollPos: optionsUI.scrollPos}));
  }

  const disableDocScroll = e =>{
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

    window.onscroll = ()=>{ 
      window.scrollTo(scrollLeft, scrollTop); 
    };
  }

  const enableDocScroll = e => {
    window.onscroll=()=>{}
  }

  useEffect(()=>{
    scroll();
    setStyle({visibility: "inherit"});
  },[])




  return (
    <div className="console__req-history console_block">
      <ul 
        className="console__req-list" 
        onMouseEnter={disableDocScroll} 
        onMouseLeave={enableDocScroll} 
        onWheel={scroll}
        style={style}
        ref={el}
      >
      {
        [1,2,3,4,5,6,7,8,9,10,2,3,4,5,6,7,8,9,10,2,3,4,5,6,7,8,9,10,2,3,4,5,6,7,8,9,10].map((el,i)=>{
          return (
            <ConsoleReqHistoryItem key={i} i={i} />
          )
        })
      }
      </ul>
      <div className="console__clear-button">
        <svg className="icon">
          <use xlinkHref="/assets/icon/sprite.svg#times"></use>
        </svg>
      </div>
    </div>
  );
}

export default ConsoleReqHistory;
