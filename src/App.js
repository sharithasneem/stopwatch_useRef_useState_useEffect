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
        <h2 className="text">Stopwatch</h2>
        <div className="time_circle">
          <div className="sec_circle"></div>
          <h1 className="timedisplay">{time}</h1>
        </div>
        <button onClick={()=>{
          setcurrentstate(0)
          clearInterval(id.current)
          }}>Stop</button>
        <button onClick={()=>{
            setcurrentstate(1)
            if(currrentstate!==1){
              handleTime()
            }
        }} >Start</button>
        <button onClick={()=>{clearInterval(id.current)
        settime(0);
        setcurrentstate(0)
        }}>Reset</button>
      </div>

    </div>
  );
}

export default App;
