import React from 'react';
import { connect } from 'react-redux';
import { sendReqData } from '../Store/Action/consoleRequest';
import Button from './UI/Button';
import Validate from '../utils/validate';

const ConsoleFooter = props => {

  const submitReq = () => {
    const isValidRequest = Validate.isValidRequest(props.reqData);
    if(!isValidRequest){
      props.setReqErr({type:'REQ_ERR', payload: true});
      return;
    }
    if(props.reqErr) props.setReqErr({type:'REQ_ERR', payload: false});
    
    props.sendReqData(props.reqData);
  }


  return (
    <div className="console__footer footer console_block">
      <Button 
        loading={props.loading} 
        onClick={submitReq} 
        title="Отправить" 
        classes={['footer__button']}
      />
      <a href="https://github.com/chetvertkoff/sendsay" className="link footer__link">@chetvertkoff</a>
      <button className="footer__format-button" tabIndex="0">
        <svg className="icon footer__format-icon">
          <use xlinkHref="/assets/icon/sprite.svg#format"></use>
        </svg>
        Форматировать
      </button>
    </div>
  );
}

const mapStatetoProps = state => ({
  reqData: state.consoleRequest.reqData,
  reqErr: state.consoleRequest.reqErr,
  loading: state.consoleRequest.loading
})

const mapDispatchToProps = dispatch =>({
  sendReqData: val=>dispatch(sendReqData(val)),
  getReqData: val=>dispatch(getReqData(val)),
  setReqErr: val => dispatch(val)
})

export default connect(mapStatetoProps, mapDispatchToProps)(ConsoleFooter);
