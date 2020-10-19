import React, { useEffect } from 'react'
import {useHistory, useLocation} from 'react-router-dom'


const useAuth = () => {
  let history = useHistory();
  let location = useLocation();

  const isAuthorized = () =>{
    return !!localStorage.getItem('auth');
  }

  useEffect(()=>{
    const authStore = localStorage.getItem('auth');
    if(!authStore && location.pathname != '/login'){
      history.push('/login');   
    }
  })
   
  return {isAuthorized};
}

export default useAuth;