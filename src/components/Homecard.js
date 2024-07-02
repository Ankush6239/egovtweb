import React, { useState } from 'react';

export default function Homecard(props) {
  const [showText, setShowText] = useState(false);

  return (
    <div className='container'>
      <div className="" style={{ width: '22rem' }}>
        <img src={props.src} className="card-img-top" alt="..." />
      </div>
      <div className="card-body" id="cardbody">
        <p
          onMouseEnter={() => setShowText(true)}
          onMouseLeave={() => setShowText(false)}
        >
         {props.p}
        </p>
        {showText && (
          <p className="hidden-text">
           <a href="/"> {props.p2}</a>
          </p>
        )}
      </div>
    </div>
  );
}
