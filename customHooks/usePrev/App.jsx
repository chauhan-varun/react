import { useState } from 'react';
import { usePrev } from './hooks/usePrev'


export default function App(){
    const [state, setState] = useState(0);
    const prev = usePrev(state);
    return (
        <div>
            <div>This is current value {state} </div>
            <div>This is previous value {prev} </div>
            <button onClick={()=> { setState(s => s+1)}} >update</button>
        </div>
    )

}
