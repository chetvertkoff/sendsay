import React from 'react';
import { connect } from 'react-redux';
import { sendReqData } from '../Store/Action/consoleRequest';
import Button from './UI/Button';

const ConsoleFooter = props => {

  return (
    <div className="console__footer footer console_block">
      <Button 
        // disabled={state.isErr}
        // loading={props.loading} 
        onClick={()=>props.sendReqData(props.reqData)} 
        title="Отправить" 
        classes={['footer__button']}
      />
      <a href="https://github.com/chetvertkoff/sendsay" className="link footer__link">@chetvertkoff</a>
      <div className="footer__format-button" tabIndex="0">
        <svg className="icon footer__format-icon">
          <use xlinkHref="/assets/icon/sprite.svg#format"></use>
        </svg>
        Форматировать
      </div>
    </div>
  );
}

const mapStatetoProps = state => ({
  reqData: state.consoleRequest.reqData
})

const mapDispatchToProps = dispatch =>({
  sendReqData: val=>dispatch(sendReqData(val))
})

export default connect(mapStatetoProps, mapDispatchToProps)(ConsoleFooter);
