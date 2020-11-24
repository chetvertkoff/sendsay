import React from 'react';
import Button from './UI/Button';

const ConsoleModalWindow = () => {
  return (
    <div className="console__modal modal-window">
      <div className="modal-window__wrapper">
        <h3 className="modal-window__title">Удалить ?</h3>
        <div className="modal-window__button-group button-group"> 
          <Button 
            title="Удалить"
            classes={["button-danger"]}
          />
          <Button 
            title="Отменить"
            classes={["button-cancel"]}
          />
        </div>
      </div>
    </div>
  );
}

export default ConsoleModalWindow;
