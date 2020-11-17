import React, { useState } from 'react';
import { connect } from 'react-redux';
import { toggleDrop } from '../Store/Action/consoleReqHistory';
import ReqDropCard from './UI/ReqDropCard';

const ConsoleReqHistoryItem = (props) => {
  const [showDrop, setDrop] = useState(false)

  return (
    <li className="console__req-item req-item console__req-item_success">
      {props.i}
      track.get
      <svg className="icon console__drop-icon" onClick={()=>setDrop(!showDrop)}>
        <use xlinkHref="/assets/icon/sprite.svg#req-item-drop"></use>
      </svg>
      {showDrop && <ReqDropCard />}
    </li>
  );
}

const mapStateToProps = state => ({
  showDrop: state.consoleReqHistory.showDrop
})

const dispatchToProps = dispatch => ({
  toggleDrop: ()=>dispatch(toggleDrop())
})

export default connect(mapStateToProps, dispatchToProps)(ConsoleReqHistoryItem);
