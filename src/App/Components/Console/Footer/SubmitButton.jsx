import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useAuth from '../../../hooks/useAuth';
import { sendReqData } from '../../../Store/Action/consoleRequest';
import validate from '../../../utils/validate';
import Button from './../../UI/Button';

const SubmitButton = () => {
  const {logOut} = useAuth();
  const dispatch = useDispatch();
  const reqErr = useSelector(state => state.consoleRequest.reqErr);
  const reqData = useSelector(state => state.consoleRequest.reqData);
  const loading = useSelector(state => state.consoleRequest.loading);
  
  const sendReqDataAsync = async () =>{
    const res = await dispatch(sendReqData(reqData));
    if(res == "logout") logOut();
  }

  const submitReq = () => {
    const isValidRequest = validate.isValidRequest(reqData);
    if(!isValidRequest){
      dispatch({type:'REQ_ERR', payload: true});
      return;
    }
    if(reqErr) dispatch({type:'REQ_ERR', payload: false});
    
    sendReqDataAsync();
  }

  return (
    <Button 
      loading={loading} 
      onClick={submitReq} 
      title="Отправить" 
      classes={['footer__button']}
    />
  );
}

export default SubmitButton;
