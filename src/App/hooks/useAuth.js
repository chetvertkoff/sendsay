import React, { useEffect } from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import Cookies from 'js-cookie';


const useAuth = () => {
  let history = useHistory();
  let location = useLocation();

  const isAuthorized = () =>{
    return !!Cookies.get('sendsay_session');
  }

  useEffect(()=>{
    const authStore = !!Cookies.get('sendsay_session');
    if(!authStore && location.pathname != '/login'){
      history.push('/login');   
      return;
    }
  })
   
  return {isAuthorized};
}

export default useAuth;