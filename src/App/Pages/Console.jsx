import React from 'react';
import ConsoleHeader from '../Components/ConsoleHeader';
import ConsoleReqHistory from '../Components/ConsoleReqHistory';

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";

const Console = ()=>{

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