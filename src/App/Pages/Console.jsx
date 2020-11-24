import React, { useEffect, useRef, useState } from 'react';
import ConsoleHeader from '../Components/ConsoleHeader';
import ConsoleReqHistory from '../Components/ConsoleReqHistory';
import ConsoleBody from '../Components/ConsoleBody';
import ConsoleFooter from '../Components/ConsoleFooter';
import { useHttp } from '../hooks/useHttp';
import ConsoleWindowLoader from '../Components/ConsoleWindowLoader';

const Console = ()=>{
  const el = useRef(null);
  const {loading, request} = useHttp();

  useEffect(()=>{
    console.log('request');
  },[])

  return(
    <section className="console" ref={el}>
      {/* <ConsoleHeader el={el} />
      <ConsoleReqHistory />
      <ConsoleBody />
      <ConsoleFooter /> */}
      <ConsoleWindowLoader />
    </section>
  )
}

export default Console;