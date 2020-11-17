import React, { useEffect, useRef, useState } from 'react';
import ConsoleHeader from '../Components/ConsoleHeader';
import ConsoleReqHistory from '../Components/ConsoleReqHistory';
import ConsoleBody from '../Components/ConsoleBody';
import ConsoleFooter from '../Components/ConsoleFooter';

const Console = ()=>{

  return(
    <section className="console">
      <ConsoleHeader />
      <ConsoleReqHistory />
      <ConsoleBody />
      <ConsoleFooter />
    </section>
  )
}

export default Console;