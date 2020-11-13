import React from 'react';
import ConsoleResize from '../Components/UI/ConsoleResize';
import Table from '../hoc/Table';
import ConsoleEditor from './ConsoleEditor';

const ConsoleBody = () => {
  return (
    <Table>
      <ConsoleEditor
        title="Запрос:"
        name="REQ"
        options={{
          showGutter: false,
          highlightActiveLine: false,
          printMargin: false
        }}
      />
      <ConsoleResize />
      <ConsoleEditor 
        title="Ответ:"
        name="RES"
        options={{
          showGutter: false,
          highlightActiveLine: false,
          printMargin: false,
          readOnly: true,
          showPrintMargin: false
        }}
      />
    </Table>
  );
}

export default ConsoleBody;
