import React, { useEffect, useState } from 'react'
import './DigitalClock.css'

const DigitalClock = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []); 

  const formatTime = (date)=> {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;


  }
  return (
    <div className='digital-main'>
      <h1 className='title'>Digital Clock</h1>
      <p className='time'>{formatTime(time)}</p>
    </div>
  )
}

export default DigitalClock
