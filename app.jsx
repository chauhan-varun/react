import { useState, useEffect } from "react";
import axios from "axios";

function App(){
  const [currentTab, setCurrentTab] = useState(null);
  const [tabData, setTabData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true)
    async function todo(){
      
      const res = await axios(`https://jsonplaceholder.typicode.com/users/${currentTab}`)
      if(res){
        setTabData(res.data.name)
      } else {
        setTabData("cant fetch data")
      }//hot module replacement (HMR)
      setLoading(false)
    }
    todo();


  }, [currentTab])

    return (
      <>
        <div>
          <button onClick={()=> {setCurrentTab(1)}} style={{color: currentTab==1 ? "red" : "black"}} >todo 1</button>
          <button onClick={()=> {setCurrentTab(2)}} style={{color: currentTab==2 ? "red" : "black"}} >todo 2</button>
          <button onClick={()=> {setCurrentTab(3)}} style={{color: currentTab==3 ? "red" : "black"}} >todo 3</button>
          <button onClick={()=> {setCurrentTab(4)}} style={{color: currentTab==4 ? "red" : "black"}} >todo 4</button>
        </div>
        <div>{loading ? "loading..." : tabData}</div>
      </>
    )
  
}
export default App
