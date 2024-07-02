
import React,{useState,useEffect} from 'react';
function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}

function Eventcard(props) {
  const [currentDate, setCurrentDate] = useState(getDate());
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
        <div className="card " style={{ width: '21rem', height:'580px' }}>
  <img src={props.imgsrc} className="card-img-top" alt="..."/>
  <div className="card-body">
  <div className='date'><p id='date2'>{currentDate}</p></div>
    <h5 className="card-title"><a href="">{props.title23}</a></h5>
    <h2 id="heading45">{props.heading2}</h2>
    <p className="card-text" id="time"><img src="https://img.icons8.com/?size=100&id=RhkKQFp4TrwF&format=png&color=000000" alt="" style={{width:"40px"}} />{time}</p>
    <p className="card-text" id="time"><img src="https://img.icons8.com/?size=100&id=3723&format=png&color=000000" alt="" style={{width:"40px"}} />{props.location}</p>
    <a href="#" className="btn btn-primary">Go somewhere </a>
 
  </div>
</div>
    </div>
  )
}

export default Eventcard
