import React from 'react';

const Table = props =>{
  return (
    <div className="console__body body console_block">
      <table className="body__table">
        <tbody>
          <tr>
            {props.children}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table;
