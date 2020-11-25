import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../Store/Action/consoleModal';
import Button from './UI/Button';

const ConsoleModalWindow = props => {

  const closeWindow = () =>{
    props.closeModal();
  }

  useEffect(()=>{

    const handleClickOutside = e => {
      if (!el.current.contains(e.target)) {
        closeWindow();
      }
    }
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  },[]);

  return (
    <div className="console__modal modal-window">
      <div className="modal-window__wrapper">
        <h3 className="modal-window__title">{props.options.title}</h3>
        <div className="modal-window__button-group button-group"> 
          <Button 
            title="Удалить"
            classes={["button-danger"]}
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
  closeModal: ()=>dispatch(closeModal())
  // deleteReqHistoryItem: val=>dispatch(deleteReqHistoryItem(val))
})

export default connect(null, mapDispatchToProps)(ConsoleModalWindow);
