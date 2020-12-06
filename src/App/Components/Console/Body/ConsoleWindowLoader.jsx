import React, {useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { useHttp } from '../../../hooks/useHttp';

const ConsoleWindowLoader = () => {
  const {request} = useHttp();
  const {logOut} = useAuth();
  const [showLoader, setLoader] = useState(true);
  const [fadeOutClass, setFaded] = useState('');

  const auth = async () => {
    const res = await request({action: "pong"});
    if(res.id?.split('/')[1] === "auth"){
      logOut();
      return;
    };

    setFaded('console__window-loader_fade-out');
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }

  useEffect(()=>{
    auth();
  },[]);

  if(!showLoader) return null;
  return (
    <div className={`console__window-loader ${fadeOutClass}`}>
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default ConsoleWindowLoader;
