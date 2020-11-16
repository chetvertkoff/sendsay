import React from 'react';
import Button from './UI/Button';

const ConsoleFooter = () => {
  return (
    <div className="console__footer footer console_block">
      <Button 
        // disabled={state.isErr}
        // loading={props.loading} 
        // onClick={getFormData} 
        title="Отправить" 
        classes={['footer__button']}
      />
      <a href="https://github.com/chetvertkoff/sendsay" className="link footer__link">@chetvertkoff</a>
      <div className="footer__format-button" tabIndex="0">
        <svg className="icon footer__format-icon">
          <use xlinkHref="/assets/icon/sprite.svg#format"></use>
        </svg>
        Форматировать
      </div>
    </div>
  );
}

export default ConsoleFooter;
