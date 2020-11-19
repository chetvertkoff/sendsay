import React from 'react';
import { connect } from 'react-redux';
import ConsoleResize from '../Components/UI/ConsoleResize';
import Table from '../hoc/Table';
import { getReqData } from '../Store/Action/consoleRequest';
import ConsoleEditor from './ConsoleEditor';

const ConsoleBody = props => {
  const resData = () => {
    if(Object.keys(props.resData)?.length){
      return JSON.stringify(props.resData, null, 2);
    }
    return "";
  }

  const reqData = () => {
    if(!Object.keys(props.reqData)?.length) return "";
    return props.reqData;
  }

  return (
    <Table>
      <ConsoleEditor
        title="Запрос:"
        name="REQ"
        getDataEditor={props.getReqData}
        err={props.reqErr}
        value={reqData()}
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
        value={resData()}
        err={props.resErr}
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
  resData: state.consoleRequest.resData,
  reqData: state.consoleRequest.reqData,
  reqErr: state.consoleRequest.reqErr,
  resErr: state.consoleRequest.resErr
})

const mapDispatchToProps = dispatch =>({
  getReqData: val=>dispatch(getReqData(val)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ConsoleBody);
