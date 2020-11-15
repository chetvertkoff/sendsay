import React, { useState } from 'react';

const ConsoleReqHistoryItem = ({i}) => {
  const [showDrop, setDrop] = useState(false);

  return (
    <li className="console__req-item req-item console__req-item_success">
      {i}
      track.get
      <svg className="icon console__drop-icon">
        <use xlinkHref="/assets/icon/sprite.svg#req-item-drop"></use>
      </svg>
    </li>
  );
}

export default ConsoleReqHistoryItem;
