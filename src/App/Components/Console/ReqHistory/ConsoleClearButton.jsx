import React from 'react';
import { useDispatch } from 'react-redux';
import { showModal } from '../../../Store/Action/consoleModal';

const ConsoleClearButton = () => {
  const dispatch = useDispatch();

  const deleteHistory = () => {
    dispatch(showModal({
      showModal: true,
      title: `Удалить историю запросов ?`,
      actionId: null
    }))
  }

  return (
    <button className="console__clear-button" onClick={deleteHistory}>
      <svg className="icon">
        <use xlinkHref="/assets/icon/sprite.svg#times"></use>
      </svg>
    </button> 
  );
}

export default ConsoleClearButton;
