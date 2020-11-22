import React from 'react';

const ReqDropCard = ({copy, fulfilReq, deleteReqItem}) => {
  
  return (
    <ul className="console__req-drop-card req-drop-card">
      <li className="req-drop-card__item" onClick={()=>fulfilReq()}>
        <span className="req-drop-card__text">Выполнить</span>
      </li>
      <li className="req-drop-card__item" onClick={()=>copy()}>
        <span className="req-drop-card__text">Скопировать</span>
      </li>
      <li className="req-drop-card__item" onClick={()=>deleteReqItem()}>
        <span className="req-drop-card__text">Удалить</span>
      </li>
    </ul>
  );
}

export default ReqDropCard;
