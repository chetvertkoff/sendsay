import React from 'react';
import ConsoleResize from '../../UI/ConsoleResize';
import Table from '../../../hoc/Table';
import ResEditor from './ResEditor';
import ReqEditor from './ReqEditor';

const ConsoleBody = () => {

  return (
    <Table>
      <ReqEditor />
      <ConsoleResize />
      <ResEditor />
    </Table>
  );
}


export default ConsoleBody;
