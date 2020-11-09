import React, { Component, useEffect, useState }  from 'react';

const Console = ()=>{
  const [style, setStyle] = useState({visibility: "hidden"});

  const scroll = (e = {}) => { 
    let item = e.currentTarget || null;
    const optionsUI = JSON.parse(localStorage.getItem('optionsUI')) || {};
    if(!optionsUI.scrollPos) optionsUI.scrollPos = 0;

    if(!item){
      item = document.querySelector('.console__req-list');
    }else{
      const {scrollWidth, scrollLeft, offsetWidth} = item;
      const pos = scrollWidth-scrollLeft-offsetWidth;

      if (e.deltaY > 0) optionsUI.scrollPos += 100;
      else optionsUI.scrollPos -= 100;
      if(pos <= 0) optionsUI.scrollPos = scrollLeft-0.001;
      if(optionsUI.scrollPos <= 0) optionsUI.scrollPos = 0;
    }

    item.scrollLeft = optionsUI.scrollPos;
    localStorage.setItem('optionsUI', JSON.stringify({...optionsUI, scrollPos: optionsUI.scrollPos}));
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

  return(
  <section className="console">
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
    <div className="console__req-history console_block">
      <ul 
        className="console__req-list" 
        onMouseEnter={disableDocScroll} 
        onMouseLeave={enableDocScroll} 
        onWheel={scroll}
        style={style}
      >
      {
        [1,2,3,4,5,6,7,8,9,10,2,3,4,5,6,7,8,9,10,2,3,4,5,6,7,8,9,10,2,3,4,5,6,7,8,9,10].map((el,i)=>{
          return (
            <li className="console__req-item console__req-item_success">
              track.get
              <svg className="icon console__drop-icon">
                <use xlinkHref="/assets/icon/sprite.svg#req-item-drop"></use>
              </svg>
            </li>
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
    <div className="console__body console_block">

    </div>
    <div className="console__footer console_block">

    </div>
  </section>
  )
}

export default Console