import React from 'react';
import AceEditor from "react-ace";

import "ace-builds/src-min-noconflict/mode-json";
import "ace-builds/src-min-noconflict/theme-github";

const ConsoleEditor = props => {
  return (
    <td className={`console__editor-wrap ${props.err && "console__editor-wrap_err" || ""}`}>
      <span className="console__editor-title">{props.title}</span>
      <div className="console__editor">
        <AceEditor
          mode="json"
          theme="github"
          name={props.name}
          value={props.value}
          width="100%"
          height="100%"
          setOptions={{
            ...props.options, 
            useWorker: false,
            fontSize: 14
          }}
          onChange={props.getDataEditor}
        />
      </div>
    </td>
  );
}

export default ConsoleEditor;
