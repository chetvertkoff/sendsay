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
          value={props.value}
          width="100%"
          height="100%"
          setOptions={props.options}
          onChange={props.getDataEditor}
        />
      </div>
    </td>
  );
}

export default ConsoleEditor;
