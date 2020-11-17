import React from 'react';
import { connect } from 'react-redux';
import ConsoleResize from '../Components/UI/ConsoleResize';
import Table from '../hoc/Table';
import { getReqData } from '../Store/Action/consoleRequest';
import ConsoleEditor from './ConsoleEditor';

const ConsoleBody = props => {
  const resData = JSON.stringify(props.resData);

  return (
    <Table>
      <ConsoleEditor
        title="Запрос:"
        name="REQ"
        getDataEditor={props.getReqData}
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
        value={resData || ''}
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

const mapStateToProps = state => ({
  resData: state.consoleRequest.resData
})

const mapDispatchToProps = dispatch =>({
  getReqData: val=>dispatch(getReqData(val))
})

export default connect(mapStateToProps, mapDispatchToProps)(ConsoleBody);
