import React, { useEffect, useState } from 'react';
import ConsoleReqHistoryItem from './ConsoleReqHistoryItem';
import ReqDropCard from './UI/ReqDropCard';

const ConsoleReqHistory = () => {

  // const [style, setStyle] = useState({visibility: "hidden"});

  const scroll = (e = {}) => { 
    // let item = e.currentTarget || null;
    // const optionsUI = JSON.parse(localStorage.getItem('optionsUI')) || {};
    // if(!optionsUI.scrollPos) optionsUI.scrollPos = 0;

    // if(!item){
    //   item = document.querySelector('.console__req-list');
    // }else{
    //   const {scrollWidth, scrollLeft, offsetWidth} = item;
    //   const pos = scrollWidth-scrollLeft-offsetWidth;

    //   if (e.deltaY > 0) optionsUI.scrollPos += 100;
    //   else optionsUI.scrollPos -= 100;
    //   if(pos <= 0) optionsUI.scrollPos = scrollLeft-0.001;
    //   if(optionsUI.scrollPos <= 0) optionsUI.scrollPos = 0;
    // }

    // item.scrollLeft = optionsUI.scrollPos;
    // localStorage.setItem('optionsUI', JSON.stringify({...optionsUI, scrollPos: optionsUI.scrollPos}));
    console.log(e);
  }

  // const disableDocScroll = e =>{
  //   const scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
  //   const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

  //   window.onscroll = ()=>{ 
  //     window.scrollTo(scrollLeft, scrollTop); 
  //   };
  // }

  // const enableDocScroll = e => {
  //   window.onscroll=()=>{}
  // }

  // useEffect(()=>{
  //   scroll();
  //   setStyle({visibility: "inherit"});
  // },[])




  return (
    <div className="console__req-history console_block">
      <ul 
        className="console__req-list" 
        // onMouseEnter={disableDocScroll} 
        // onMouseLeave={enableDocScroll} 
        onWheel={scroll}
        // style={style}
      >
      {
        [1,2,3,4,5,6,7,8,9,10,2,3,4,5,6,7,8,9,10,2,3,4,5,6,7,8,9,10,2,3,4,5,6,7,8,9,10].map((el,i)=>{
          return (
            <ConsoleReqHistoryItem key={i} />
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
