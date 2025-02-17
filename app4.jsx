import { useState } from "react";
import { useRef } from "react";

function App(){
    const [timer, setTimer] = useState(0);
    const clock= useRef();
    const startTimer =()=>{
        clock.current = setInterval(()=>{
            setTimer(c=> c+1)
        }, 1000)
    }

    const stopTimer = ()=> {
        clearInterval(clock.current)
    }
    return (
        <div>
            <div>{timer}</div>
            <button onClick={startTimer} >start</button>
            <button onClick={stopTimer}>stop</button>
        </div>
    )
}
export default App
