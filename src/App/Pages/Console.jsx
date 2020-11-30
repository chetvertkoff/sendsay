import React, { useRef } from 'react';
import ConsoleHeader from '../Components/ConsoleHeader';
import ConsoleReqHistory from '../Components/ConsoleReqHistory';
import ConsoleBody from '../Components/ConsoleBody';
import ConsoleFooter from '../Components/ConsoleFooter';
import ConsoleWindowLoader from '../Components/ConsoleWindowLoader';
import ConsoleModalWindow from './../Components/ConsoleModalWindow';

const Console = () => {
  const el = useRef(null);

  return(
    <section className="console" ref={el}>
      <ConsoleHeader el={el} />
      <ConsoleReqHistory />
      <ConsoleBody />
      <ConsoleFooter />
      <ConsoleWindowLoader />
      <ConsoleModalWindow/>
    </section>
  )
}

export default Console;