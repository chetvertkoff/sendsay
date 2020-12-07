import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import useAuth from '../../../hooks/useAuth';
import { showModal } from '../../../Store/Action/consoleModal';
import { getReqData, sendReqData } from '../../../Store/Action/consoleRequest';
import ReqDropCard from '../../UI/ReqDropCard';

const ConsoleReqHistoryItem = props => {
  const item = props.item;
  const classIndicator = item.isErr ? "req-item__inner_err" : "req-item__inner_success";
  let classes = ['req-item__inner', classIndicator];
  const [copyClass, setClass] = useState('');
  const {logOut} = useAuth();
  const dispatch = useDispatch();

  const copyText = () => {
    const copyReq = JSON.stringify({...item, isErr: undefined});
    const el = document.createElement("input");
    el.style.height = '0px';
    el.style.width = '1px';
    document.body.appendChild(el);
    el.value = copyReq;
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  }

  const copy = () => {
    setClass('req-item__inner_copied');
    copyText();
    setTimeout(() => {
      setClass('');
    }, 500);
  }

  const deleteReqItem = ()=>{
    dispatch(showModal({
      showModal: true,
      title: `Удалить ${item.action} ?`,
      actionId: item.actionId
    }));
  }

  const fulfilReq = useCallback(()=>{
    const req = fillReqField();
    sendReqDataAsync(req);
  },[]);

  const fillReqField = ()=>{
    const formattedText = JSON.stringify({action: item.action}, null, 2);
    dispatch(getReqData(formattedText));
    return formattedText;
  }

  const sendReqDataAsync = async (req) =>{
    const res = await dispatch(sendReqData(req));
    if(res == "logout") logOut();
  }

  return (
    <li 
      className="console__req-item req-item"
    >
      <div className={[...classes, copyClass].join(' ')} onClick={fillReqField}>
        {item.action}
      </div>
      <svg 
          className="icon req-item__drop-icon" 
          id={props.i}
        >
        <use xlinkHref="/assets/icon/sprite.svg#req-item-drop"></use>
      </svg>
      {
        props.showDrop && 
          <ReqDropCard 
            copy={copy} 
            fulfilReq={fulfilReq} 
            deleteReqItem={deleteReqItem} 
          />
      }
    </li>
  );
}

export default ConsoleReqHistoryItem;
