import React, { useCallback, useEffect, useRef, useState } from 'react';
import ConsoleReqHistoryItem from './ConsoleReqHistoryItem';
import ConsoleClearButton from './ConsoleClearButton';
import { useSelector } from '../../../../react-redux/';

const ConsoleReqHistory = () => {
  const reqHistory = useSelector(state => state.consoleReqHistory.reqHistory);
  const [currentId, setID] = useState(null);
  const el = useRef(null);
  const droppedClasses = ['console__req-list'];

  if(currentId != null) droppedClasses.push('console__req-list_dropped');
  else droppedClasses.filter(el=>el!=='console__req-list_dropped');

  const scroll = useCallback((e = {}) => { 
    if(currentId != null) return;
    
    let item = e.currentTarget || null;
    const optionsUI = JSON.parse(localStorage.getItem('optionsUI')) || {};
    if(!optionsUI.scrollPos) optionsUI.scrollPos = 0;

    if(!item){
      item = el.current;
    }else{
      const {scrollWidth, scrollLeft, offsetWidth} = item;
      const pos = scrollWidth-scrollLeft-offsetWidth;

      if (e.deltaY > 0) optionsUI.scrollPos += 100;
      else optionsUI.scrollPos -= 100;
      if(pos < 1) optionsUI.scrollPos -= 100;
      if(optionsUI.scrollPos <= 0) optionsUI.scrollPos = 0;
    }
    item.scrollLeft = optionsUI.scrollPos;
    localStorage.setItem('optionsUI', JSON.stringify({...optionsUI, scrollPos: optionsUI.scrollPos}));
  },[currentId]);


  const setDrop = useCallback(e=>{
    const id = e.target.id;
    if(!id || id == currentId) {
      setID(null);
      return;
    }
    setID(id);
  },[currentId])

  useEffect(()=>{
    scroll();

    const handleClickOutside = e => {
      if (!el.current.contains(e.target)) {
        setID(null);
      }
    }
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  },[]);

  return (
    <div className="console__req-history console_block">
      <ul 
        className={droppedClasses.join(' ')}
        onWheel={scroll}
        onClick={setDrop}
        ref={el}
      >
      {[...reqHistory].reverse().map((el, i) =>{
        return <ConsoleReqHistoryItem 
          key={i} 
          i={i} 
          item={el} 
          showDrop={i == currentId} 
        />
      })}
      </ul>
      {reqHistory?.length && <ConsoleClearButton /> || null }
    </div>
  );
}

export default ConsoleReqHistory;
