import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import useAuth from '../hooks/useAuth';
import { deleteReqHistoryItem } from '../Store/Action/consoleReqHistory';
import { getReqData, sendReqData } from '../Store/Action/consoleRequest';
import ReqDropCard from './UI/ReqDropCard';

const ConsoleReqHistoryItem = props => {
  const item = props.item;
  const classIndicator = item.isErr ? "req-item__inner_err" : "req-item__inner_success";
  let classes = ['req-item__inner', classIndicator];
  const [copyClass, setClass] = useState(classes);
  const {logOut} = useAuth();

// console.log(copyClass,classes, item);

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
    copyClass.push('req-item__inner_copied');
    setClass([...copyClass]);
    copyText();
    setTimeout(() => {
      let newCopyClasses = copyClass.filter(el=>el!='req-item__inner_copied');
      setClass([...newCopyClasses]);
    }, 500);
  }

  const deleteReqItem = useCallback(()=>{
    console.log(item);
    props.deleteReqHistoryItem(item);
  },[])

  const fulfilReq = useCallback(()=>{
    const req = fillReqField();
    sendReqData(req);
  },[]);

  const fillReqField = useCallback(()=>{
    const formattedText = JSON.stringify({action: item.action}, null, 2);
    props.getReqData(formattedText);
    return formattedText;
  },[]);

  const sendReqData = async (req) =>{
    const res = await props.sendReqData(req);
    if(res == "logout") logOut();
  }

  return (
    <li 
      className="console__req-item req-item"
    >
      <div className={copyClass.join(' ')} onClick={fillReqField}>
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

const mapDispatchToProps = dispatch => ({
  getReqData: val=>dispatch(getReqData(val)),
  sendReqData: val=>dispatch(sendReqData(val)),
  deleteReqHistoryItem: val=>dispatch(deleteReqHistoryItem(val))
})

export default connect(null, mapDispatchToProps)(ConsoleReqHistoryItem);
