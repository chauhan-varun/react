import { useState, useEffect } from "react";

function IntervalTimer(){
  const [visible, setVisible] = useState(true)
  useEffect(()=>{
    setInterval(()=>{
      setVisible(visible=> !visible)
    }, 5000)
  }, [])
  return (
    <div>
      {visible? <Timer/> : null}
    </div>
  )
}

function Timer(){
  const [counter, setCounter] = useState(0);
  
  useEffect(()=>{
    let clock = setInterval(() => {
      console.log("interval");
      
      setCounter(counter=> counter+1)
    }, 1000);

    return ()=>{
      clearInterval(clock)
    }
  }, [])

  return (
    <div>{counter}</div>
  )
}

export default IntervalTimer
