import React, { useEffect, useRef, useState } from 'react';
import ConsoleHeader from '../Components/ConsoleHeader';
import ConsoleReqHistory from '../Components/ConsoleReqHistory';
import ConsoleBody from '../Components/ConsoleBody';
import ConsoleFooter from '../Components/ConsoleFooter';

const Console = ()=>{
  const el = useRef(null);

  return(
    <section className="console" ref={el}>
      <ConsoleHeader el={el} />
      <ConsoleReqHistory />
      <ConsoleBody />
      <ConsoleFooter />
    </section>
  )
}

export default Console;