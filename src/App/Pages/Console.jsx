import React, { useEffect, useRef, useState } from 'react';
import ConsoleHeader from '../Components/ConsoleHeader';
import ConsoleReqHistory from '../Components/ConsoleReqHistory';
import ConsoleBody from '../Components/ConsoleBody';

const Console = ()=>{


  return(
  <section className="console">
    {/* <ConsoleHeader />
    <ConsoleReqHistory /> */}
    <ConsoleBody />
    <div className="console__footer console_block">

    </div>
  </section>
  )
}

export default Console