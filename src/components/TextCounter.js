import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function TextCounter(props) {
  const [count0, setCount0] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  // Effect for count0
  useEffect(() => {
    if (count0 < 5) {
      const timer0 = setTimeout(() => {
        setCount0((prevCount0) => prevCount0 + 1);
      }, 1000);

      return () => clearTimeout(timer0);
    }
  }, [count0]);

  // Effect for count1
  useEffect(() => {
    if (count1 < 0.5) {
      const timer1 = setTimeout(() => {
        setCount1((prevCount1) => prevCount1 + 0.1);
      }, 1000);

      return () => clearTimeout(timer1);
    }
  }, [count1]);

  // Effect for count2
  useEffect(() => {
    if (count2 < 3) {
      const timer2 = setTimeout(() => {
        setCount2((prevCount2) => prevCount2 + 1);
      }, 1000);

      return () => clearTimeout(timer2);
    }
  }, [count2]);

  // Effect for count3
  useEffect(() => {
    if (count3 < 10) {
      const timer3 = setTimeout(() => {
        setCount3((prevCount3) => prevCount3 + 1);
      }, 1000);

      return () => clearTimeout(timer3);
    }
  }, [count3]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-3" id="col12">
          <img src={props.src1} alt="" style={{ boxShadow: '0px 0px 138px 2px white' }} />
          <h1>{count0} {props.heading}</h1>
          <p>{props.p3}</p>
        </div>
        <div className="col-sm-3" id="col12">
          <img src={props.src2} alt="" style={{ boxShadow: '0px 0px 138px 2px white' }} />
          <h1>{count1} {props.heading}</h1>
          <p>{props.p2}</p>
        </div>
        <div className="col-sm-3" id="col12">
          <img src={props.src3} alt="" style={{ boxShadow: '0px 0px 138px 2px white' }} />
          <h1>{count2} {props.heading1}</h1>
          <p>{props.p3}</p>
        </div>
        <div className="col-sm-3 pa" id="col12" >
          <img src={props.src4} alt="" style={{ boxShadow: '0px 0px 138px 2px white' }} />
          <h1>{count3} {props.heading2}</h1>
          <p>{props.p4}</p>
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TextCounter src2="image_path.jpg" heading=" Your Heading" p3="Your Paragraph" />);

export default TextCounter;
