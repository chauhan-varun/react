import { useState } from 'react';
import { useFetch } from './hooks/useFetch'

export default function App(){
    const [post, setPost] = useState("")
    const { data, loading } = useFetch(`https://jsonplaceholder.typicode.com/users/${post}`);
    return (
        <div>
            <button onClick={()=> setPost(1)} >1</button>
            <button onClick={()=> setPost(2)} >2</button>
            <button onClick={()=> setPost(3)} >3</button>
            <div> { loading? "loading..." : JSON.stringify(data.name)} </div>
        </div>
    ) 

}
