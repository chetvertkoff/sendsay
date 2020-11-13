import React, { useState } from 'react';

const ConsoleReqHistoryItem = () => {
  const [showDrop, setDrop] = useState(false);

  return (
    <li className="console__req-item req-item console__req-item_success">
      track.get
      <svg className="icon console__drop-icon">
        <use xlinkHref="/assets/icon/sprite.svg#req-item-drop"></use>
      </svg>
      {showDrop &&       
      <ul className="req-item__drop-card">
        <li>Выполнить</li>
        <li>Скопировать</li>
        <li>Удалить</li>
      </ul>}
    </li>
  );
}

export default ConsoleReqHistoryItem;
