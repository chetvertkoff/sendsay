import React, { useEffect, useRef, useState } from 'react';
import ConsoleHeader from '../Components/ConsoleHeader';
import ConsoleReqHistory from '../Components/ConsoleReqHistory';

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";

const Console = ()=>{

  const [dragging, setDragging] = useState(false);
  const el = useRef(null);

  const dragStart = e => {
    setDragging(true);
    
  }

  const onMouseMove = e => {
    console.log('move');
  }

  const endDrag = e => {
    setDragging(false);
    console.log('end');
  }

  useEffect(()=>{
    el.current.addEventListener('mousemove', onMouseMove);
    el.current.addEventListener('mouseup', endDrag);
    console.log('render');
    return ()=>{
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', endDrag);
      console.log('end');
    }
  },[dragging])

  return(
  <section className="console">
    <ConsoleHeader />
    <ConsoleReqHistory />
    <div className="console__body console_block">
      <div className="console__editor-wrap">
        <span className="console__editor-title">Запрос:</span>
        <div className="console__editor">
          <AceEditor
            mode="json"
            name="REQ"
            width="100%"
            setOptions={{
              showGutter: false,
              highlightActiveLine: false,
              printMargin: false
            }}
          />
        </div>
      </div>
      <div className="console__resize" >
        <svg className="icon console__drop-icon" onMouseDown={dragStart} ref={el}>
            <use xlinkHref="/assets/icon/sprite.svg#req-item-drop"></use>
          </svg>
        </div>
      <div className="console__editor-wrap">
        <span className="console__editor-title">Ответ:</span>
        <div className="console__editor">
          <AceEditor
            mode="json"
            name="RES"
            width="100%"
            setOptions={{
              showGutter: false,
              highlightActiveLine: false,
              printMargin: false,
              readOnly: true,
              showPrintMargin: false
            }}
          />
        </div>
      </div>
    </div>
    <div className="console__footer console_block">

    </div>
  </section>
  )
}

export default Console