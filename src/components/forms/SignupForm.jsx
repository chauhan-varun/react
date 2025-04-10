import { useRef } from "react";

function SignupForm(){
    const inputRef = useRef();
    function handelRef(){
        inputRef.current.focus();
    }
    return (
        <div>
            <div>Sign Up</div>
                <input ref={inputRef} type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button onClick={handelRef} >Sign Up</button>
        </div>
    )
}
export default SignupForm
