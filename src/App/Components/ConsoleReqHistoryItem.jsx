import React, { useEffect, useRef, useState } from 'react';
import ReqDropCard from './UI/ReqDropCard';

const ConsoleReqHistoryItem = props => {
  const [showDrop, setDrop] = useState(props.setDrop);
  const el = useRef(null);
  const item = props.item;
  const isErr = item.isErr ? "err" : "success";

  useEffect(() => {
    const handleClickOutside = e => {
      if (el.current && !el.current.contains(e.target)) {
        setDrop(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [el, props.setDrop]);


  return (
    <li 
      className={`console__req-item req-item console__req-item_${isErr}`} 
      ref={el}
    >
      {item.action}
      <svg 
        className="icon console__drop-icon" 
        onClick={()=>setDrop(!showDrop)}
      >
        <use xlinkHref="/assets/icon/sprite.svg#req-item-drop"></use>
      </svg>
      {showDrop && <ReqDropCard />}
    </li>
  );
}

export default ConsoleReqHistoryItem;
