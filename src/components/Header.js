import React from 'react';

function Header() {

  function overBackground(event) {
    event.target.style.color = '#2626ff';
    
  }

  function leaveBackground(event) {
    event.target.style.color = 'black';
    
  }

  return (
    <h1 onMouseOver={overBackground} onMouseLeave={leaveBackground} className="title">DAML Weather Forecast</h1>
  );
}

export default Header
