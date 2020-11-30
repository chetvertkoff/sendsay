import React, { useEffect, useRef, useState } from 'react';
import ConsoleHeader from '../Components/ConsoleHeader';
import ConsoleReqHistory from '../Components/ConsoleReqHistory';
import ConsoleBody from '../Components/ConsoleBody';
import ConsoleFooter from '../Components/ConsoleFooter';
import { useHttp } from '../hooks/useHttp';
import ConsoleWindowLoader from '../Components/ConsoleWindowLoader';
import useAuth from '../hooks/useAuth';
import ConsoleModalWindow from './../Components/ConsoleModalWindow';

const Console = props => {
  const el = useRef(null);
  const {request} = useHttp();
  const {logOut} = useAuth();

  const [showLoader, setLoader] = useState(false);
  const [fadeOutClass, setFaded] = useState('');

  const auth = async () => {
    setLoader(true);
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
  },[])
  console.log('render console');
  return(
    <section className="console" ref={el}>
      <ConsoleHeader el={el} />
      <ConsoleReqHistory />
      <ConsoleBody />
      <ConsoleFooter />
      {showLoader && <ConsoleWindowLoader fadeOutClass={fadeOutClass} />}
      <ConsoleModalWindow/>
    </section>
  )
}

export default Console;