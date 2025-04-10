import { useState } from "react";

function SimpleBulb(){
    return <Bulb/>
}

const Bulb = () => {
    const [bulbOn, setBulbOn] = useState(true)
    return (
        <div>
            <Display bulbOn={bulbOn} />
            <Toggle setBulbOn={setBulbOn} />
        </div>
    )
}

const Display = ({bulbOn}) =>{
    return (
        <div>{bulbOn? "bulb On" : "bulb Off"}</div>
    )
}

const Toggle = ({setBulbOn})=>{
    return (
        <div>
            <button onClick={()=>{ setBulbOn(c=> !c) }}>switch</button>
        </div>
    )
}

export default SimpleBulb
