import React,{useState,useEffect} from 'react';
function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }
function News(props) {
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
        <div>
        <div className="card " style={{ width: '21rem', height:'432px' }}>
  <img src={props.imgsrc} className="card-img-top" alt="..."/>
  <div className="card-body">
  <div className='dat'><p id='date3'>{currentDate}</p></div>
    <h5 className="card-title"><a href="">{props.title23}</a></h5>
    <p className="card-text" id="time">{props.location} &nbsp; <img src="https://img.icons8.com/?size=100&id=38977&format=png&color=000000" alt="" style={{width:"40px"}} /></p>
    <h2 id="heading44">{props.heading2}</h2>
 <a href="/" style={{textAlign:"left"}}>Continue Reading > </a>
  </div>
</div>
    </div>
    </div>
  )
}

export default News
