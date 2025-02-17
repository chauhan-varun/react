import { useState, createContext, useContext } from "react";
const Bulb = createContext();
const BulbPovider =({children})=>{
    const [bulbOn, setBulbOn] = useState(true);
    return <div>
        <Bulb.Provider value={{
            bulbOn: bulbOn,
            setBulbOn: setBulbOn
        }} >
            {children}
        </Bulb.Provider>
    </div>
}

function App(){
    return <div>
        <BulbPovider>
            <Light/>
        </BulbPovider>
    </div>
}

const Light = () => {
    return (
        <div>
            <Display/>
            <Toggle/>
        </div>
    )
}

const Display = () =>{
    const {bulbOn} = useContext(Bulb);
    return (
        <div>{bulbOn? "bulb On" : "bulb Off"}</div>
    )
}

const Toggle = ()=>{
    const { setBulbOn } = useContext(Bulb)
    return (
        <div>
            <button onClick={()=>{ setBulbOn(c=> !c) }}>switch</button>
        </div>
    )
}

export default App
