import React from 'react';

import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-json";

const ConsoleEditor = props => {
  return (
    <td className="console__editor-wrap">
      <span className="console__editor-title">{props.title}</span>
      <div className="console__editor">
        <AceEditor
          mode="json"
          name={props.name}
          width="100%"
          setOptions={props.options}
        />
      </div>
    </td>
  );
}

export default ConsoleEditor;
