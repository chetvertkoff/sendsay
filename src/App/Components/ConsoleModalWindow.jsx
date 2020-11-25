import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../Store/Action/consoleModal';
import { deleteHistory, deleteReqHistoryItem } from '../Store/Action/consoleReqHistory';
import Button from './UI/Button';

const ConsoleModalWindow = props => {
  const el = useRef();
  const item = props.options;
  const [classes, setClasses] = useState(['console__modal', 'modal-window', 'modal-window_open']);

  const closeWindow = () =>{
    const openWindowClass = [...classes, 'modal-window_close'];
    setClasses(openWindowClass);
    setTimeout(() => {
      props.closeModal();
    }, 450);
  }

  const remove = () => {
    if(item.actionId){
      props.deleteReqHistoryItem(item.actionId);
    }else {
      props.deleteHistory();
    }
    closeWindow();
  }

  useEffect(()=>{
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

    document.addEventListener("click", handleCLickOutside);
    document.addEventListener("keydown", handleEscapeOutside);

    return () => {
      document.removeEventListener("click", handleCLickOutside);
      document.removeEventListener("keydown", handleEscapeOutside);
    };
  },[]);

  console.log('render');

  return (
    <div className={classes.join(' ')} ref={el}>
      <div className="modal-window__wrapper">
        <h3 className="modal-window__title">{item.title}</h3>
        <div className="modal-window__button-group button-group"> 
          <Button 
            title="Удалить"
            classes={["button-danger"]}
            onClick={()=>remove()}
          />
          <Button 
            title="Отменить"
            classes={["button-cancel"]}
            onClick={()=>closeWindow()}
          />
        </div>
      </div>
      <button className="modal-window__close-button" onClick={()=>closeWindow()}>
        <svg className="icon modal-window__close-button-icon">
          <use xlinkHref="/assets/icon/sprite.svg#times"></use>
        </svg>
      </button>
    </div>
  );
}


const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal()),
  deleteHistory: () => dispatch(deleteHistory()),
  deleteReqHistoryItem: id => dispatch(deleteReqHistoryItem(id))
})

export default connect(null, mapDispatchToProps)(ConsoleModalWindow);
