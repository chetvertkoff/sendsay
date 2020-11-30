import React from 'react';
import { connect } from 'react-redux';
import { showModal } from '../../Store/Action/consoleModal';

const ConsoleClearButton = props => {
  const deleteHistory = () => {
    props.showModal({
      showModal: true,
      title: `Удалить историю запросов ?`,
      actionId: null
    })
  }

  return (
    <button className="console__clear-button" onClick={deleteHistory}>
      <svg className="icon">
        <use xlinkHref="/assets/icon/sprite.svg#times"></use>
      </svg>
    </button> 
  );
}

const mapDispatchToProps = dispatch => ({
  showModal:val=>dispatch(showModal(val))
})

export default connect(null, mapDispatchToProps)(ConsoleClearButton);
