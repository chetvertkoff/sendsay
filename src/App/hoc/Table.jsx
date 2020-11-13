import React from 'react';

const Table = props =>{
  return (
    <table className="console__body console_block">
      <tbody>
        <tr>
          {props.children}
        </tr>
      </tbody>
    </table>
  )
}

export default Table;
