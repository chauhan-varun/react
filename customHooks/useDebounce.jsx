import { useState, useEffect } from "react";
const useDebunce = (value, delay) => {
    const [debounceValue, setDebounceValue] = useState(value)
    useEffect(()=>{
        const handler = setTimeout(()=>{
            setDebounceValue(value)
        }, delay)

        return ()=>{
            clearTimeout(handler)
        }
    }, [value, delay])

    return debounceValue;
}

export default function App(){
    const [inputValue, setInputValue] = useState("")
    const debounceValue = useDebunce(inputValue, 200)

    function change(e){
        setInputValue(e.target.value)
    }
    
    useEffect(()=>{
        console.log("expensive Operation");
        
    }, [debounceValue])

    return (
        <input type="text" onChange={ change } />
    )
}
