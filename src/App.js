import{useState,useEffect, useRef} from 'react';
import './App.css';

function App() {
  const [time,settime]=useState(0)
  const [currrentstate,setcurrentstate]=useState(0)
  useEffect(()=>{
    return()=> clearInterval(id.current);  
  },[])
  let id=useRef()
  function handleTime(){
    id.current=setInterval(()=>{
    settime((prev)=>prev+1)
    
  },100)
}
  return (
    <div className="App">
      <div className="box">
        <h2 className="text">StopWatch</h2>
        <div className="time_circle">
          <h1 className="timedisplay">{time}ms</h1>
        </div>
        <button className="button" onClick={()=>{
          setcurrentstate(0)
          clearInterval(id.current)
          }}>STOP</button>
        <button className="button" onClick={()=>{
            setcurrentstate(1)
            if(currrentstate!==1){
              handleTime()
            }
        }} >START</button>
        <button className="button1" onClick={()=>{clearInterval(id.current)
        settime(0);
        setcurrentstate(0)
        }}>reset ⭮</button>
      </div>

    </div>
  );
}

export default App;
