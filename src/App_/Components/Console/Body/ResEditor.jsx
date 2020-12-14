import React from 'react';
import ConsoleEditor from '../../UI/ConsoleEditor';
import { useSelector } from '../../../../react-redux/';

const ResEditor = () => {
  const resData = useSelector(state => state.consoleRequest.resData);
  const resErr = useSelector(state => state.consoleRequest.resErr);

  const resDataVal = () => {
    if(Object.keys(resData)?.length){
      return JSON.stringify(resData, null, 2);
    }
    return "";
  }

  return (
    <ConsoleEditor 
      title="Ответ:"
      name="RES"
      value={resDataVal()}
      err={resErr}
      options={{
        showGutter: false,
        highlightActiveLine: false,
        printMargin: false,
        readOnly: true,
        showPrintMargin: false
      }}
    />
  );
}

export default ResEditor;
