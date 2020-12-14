import React  from 'react';

const Logo = ({parentClass}) => {
  return (
    <div className={`logo ${parentClass}`}>
      <div className="logo__figure logo_ellipse"></div>
      <div className="logo__figure logo_rectangle1"></div>
      <div className="logo__figure logo_ellipse"></div>
      <div className="logo__figure logo_rectangle2"></div>
    </div>
  )
}

export default Logo;