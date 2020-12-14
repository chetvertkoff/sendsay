import React, { useCallback } from 'react';
import { useDispatch, useSelector } from '../../../../react-redux/';
import ConsoleEditor from '../../UI/ConsoleEditor';
import { getReqData } from '../../../Store/Action/consoleRequest';

const ReqEditor = () => {
  const reqData = useSelector(state => state.consoleRequest.reqData);
  const reqErr = useSelector(state => state.consoleRequest.reqErr);
  const dispatch = useDispatch();

  const reqDataVal = useCallback(() => {
    if(!Object.keys(reqData)?.length) return "";
    return reqData;
  }, [reqData])

  const onChange = useCallback(val => {
    dispatch(getReqData(val ?? ''))
  }, [reqData])

  return (
    <>
      <ConsoleEditor
        title="Запрос:"
        name="REQ"
        onChange={onChange}
        err={reqErr}
        value={reqDataVal()}
        options={{
          showGutter: false,
          highlightActiveLine: false,
          printMargin: false
        }}
      />
    </>
  );
}

export default ReqEditor;
