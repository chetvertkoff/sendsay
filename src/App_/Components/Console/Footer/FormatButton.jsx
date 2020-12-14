import React from 'react';
import { useDispatch, useSelector } from '../../../../react-redux/';
import { getReqData } from '../../../Store/Action/consoleRequest';

const FormatButton = () => {
  const dispatch = useDispatch();
  const reqData = useSelector(state => state.consoleRequest.reqData);

  const beautifyJson = () => {
    try {
      const parseData = JSON.parse(reqData);
      const formattedText = JSON.stringify(parseData, null, 2);
      dispatch(getReqData(formattedText));
    } catch (error) {}
  }  

  return (
    <button className="footer__format-button" onClick={beautifyJson}>
      <svg className="icon footer__format-icon">
        <use xlinkHref="/assets/icon/sprite.svg#format"></use>
      </svg>
      Форматировать
    </button>
  );
}

export default FormatButton;
