import React, { memo, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from '../../../../react-redux/';
import { closeModal } from '../../../Store/Action/consoleModal';
import { deleteHistory, deleteReqHistoryItem } from '../../../Store/Action/consoleReqHistory';
import Button from '../../UI/Button';

const shouldComponentUpdate  = (prev, next) => {
  return !!prev.modal.title === next.modal.title;
}

const ConsoleModalWindowInit = memo(props => {
  const item = props.modal;
  if(!item.title) return null;

  const el = useRef();
  const [classes, setClasses] = useState(['console__modal', 'modal-window', 'modal-window_open']);
  const dispatch = useDispatch();

  const closeWindow = () =>{
    const openWindowClass = [...classes, 'modal-window_close'];
    setClasses(openWindowClass);
    setTimeout(() => {
      dispatch(closeModal());
    }, 450);
    document.removeEventListener("click", handleCLickOutside);
    document.removeEventListener("keydown", handleEscapeOutside);
  }

  const remove = () => {
    if(item.actionId){
      dispatch(deleteReqHistoryItem(item.actionId));
    }else {
      dispatch(deleteHistory());
    }
    closeWindow();
  }

  const handleCLickOutside = e => {
    if (!el.current?.contains(e.target)) {
      closeWindow();
    }
  }

  const handleEscapeOutside = e => {
    if (e.key === 'Escape') {
      closeWindow();
    }
  }

  useEffect(()=>{
    document.addEventListener("click", handleCLickOutside);
    document.addEventListener("keydown", handleEscapeOutside);
  },[]);

  return (
    <div className={classes.join(' ')} ref={el}>
      <div className="modal-window__wrapper">
        <h3 className="modal-window__title">{item.title}</h3>
        <div className="modal-window__button-group button-group"> 
          <Button 
            title="Удалить"
            classes={["button-danger"]}
            onClick={() => remove()}
          />
          <Button 
            title="Отменить"
            classes={["button-cancel"]}
            onClick={() => closeWindow()}
          />
        </div>
      </div>
      <button className="modal-window__close-button" onClick={() => closeWindow()}>
        <svg className="icon modal-window__close-button-icon">
          <use xlinkHref="/assets/icon/sprite.svg#times"></use>
        </svg>
      </button>
    </div>
  );
}, shouldComponentUpdate)

const ConsoleModalWindow = () => {
  const modal = useSelector(state => state.consoleModal.modal);

  return <ConsoleModalWindowInit modal={modal} />
}

export default ConsoleModalWindow;
