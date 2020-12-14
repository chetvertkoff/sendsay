import React from 'react';
import FormatButton from './FormatButton';
import SubmitButton from './SubmitButton';

const ConsoleFooter = () => {

  return (
    <div className="console__footer footer console_block">
      <SubmitButton />
      <a href="https://github.com/chetvertkoff/sendsay" className="link footer__link">@chetvertkoff</a>  
      <FormatButton />
    </div>
  );
}

export default ConsoleFooter;
