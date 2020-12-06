import React, { useRef } from 'react';
import ConsoleHeader from './../Components/Console/Header/ConsoleHeader';
import ConsoleReqHistory from './../Components/Console/ReqHistory/ConsoleReqHistory';
import ConsoleBody from './../Components/Console/Body/ConsoleBody';
import ConsoleFooter from './../Components/Console/Footer/ConsoleFooter';
import ConsoleModalWindow from '../Components/Console/Body/ConsoleModalWindow';
import ConsoleWindowLoader from '../Components/Console/Body/ConsoleWindowLoader';

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