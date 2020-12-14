import React, { useEffect } from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import Cookies from 'js-cookie';
import Sendsay from 'sendsay-api';

const sendsay = new Sendsay();

const useAuth = () => {
  let history = useHistory();
  let location = useLocation();

  const isAuthorized = () =>{
    return !!Cookies.get('sendsay_session');
  }

  const logOut = async () => {
    await sendsay.request({action: "logout"});
    Cookies.remove('sendsay_session'); 
    localStorage.removeItem('user_info');
    history.push('/login');
  }

  useEffect(()=>{
    const authStore = !!Cookies.get('sendsay_session');
    if(!authStore && location.pathname != '/login'){
      history.push('/login');   
      return;
    }
  })
   
  return {isAuthorized, logOut};
}

export default useAuth;