import React, { useEffect, useRef, useState } from 'react';

const ConsoleResize = () => {
  
  const [dragging, setDragging] = useState(false);

  const el = useRef(null);
  let mouseX = 0
  let startPos = 0;
  let startWidthPrev = 0;
  let startWidthNext = 0;
  const optionsUI = JSON.parse(localStorage.getItem('optionsUI')) || {};

  const onStart = () => {
    if(!optionsUI.resizeBody) return;
    const {prev, next} = optionsUI.resizeBody;
    
    el.current.previousSibling.style.width = prev + 'px';
    el.current.nextSibling.style.width = next + 'px';
  }

  const dragStart = e => {
    setDragging(true);

    startPos = mouseX;
    startWidthPrev = 0;
    startWidthNext = 0;

    let prevSibling = el.previousSibling;
    let nextSibling = el.nextSibling;

    if (prevSibling) {
        startWidthPrev = prevSibling.clientWidth;
    }

    if (nextSibling) {
        startWidthNext = nextSibling.clientWidth;            
    }
  }

  const onMouseMove = e => {
    if(!dragging) return;
    mouseX = e.screenX
    const moveDiff = startPos - mouseX;
    let prev = startWidthPrev - moveDiff;
    let next = startWidthNext + moveDiff;
    const parentWidth = el.current.parentNode.offsetWidth;
    const limit = parentWidth / 4;

    next = parentWidth - prev;
    if(prev < limit || next < limit) return;

    el.current.previousSibling.style.width = prev + 'px';
    el.current.nextSibling.style.width = next + 'px';
    localStorage.setItem('optionsUI', JSON.stringify({...optionsUI,resizeBody:{next,prev}}));
    e.preventDefault();
  }

  const endDrag = e => {
    setDragging(false);
    e.preventDefault();
  }

  useEffect(() => {
    onStart();
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', endDrag);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', endDrag);
    }
  },[dragging]);


  return (
    <td className="console__resize" onMouseDown={dragStart} ref={el}>
      <svg className="icon console__drop-icon">
        <use xlinkHref="/assets/icon/sprite.svg#req-item-drop"></use>
      </svg>
    </td>
  );
}

export default ConsoleResize;
