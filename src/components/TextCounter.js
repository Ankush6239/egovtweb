import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function TextCounter(props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);

    // Clear the timeout if the component is unmounted
    return () => clearTimeout(timer);
  }, [count]); // Dependency array includes count to update the effect when count changes

  return (
    <>
    <div className="container">
      <img src={props.src2} alt="" style={{ boxShadow: '0px 0px 10px 2px white' }} />
      <h1> {count}{props.heading}</h1>
      <p>{props.p3}</p>
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TextCounter />);

export default TextCounter;
