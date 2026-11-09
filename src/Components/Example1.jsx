import{useRef,useState} from 'react';
function Example1(){
    const usernameRef=useRef(null);
    const [username,setUsername]=useState("");
    const [useremail,setUseremail]=useState("");
    const handleSubmit=()=>{
        usernameRef.current.focus();
        usernameRef.current.style.color="red";
        console.log(usernameRef.current.value);
    }
    return (
        <>
        <form>
            Username: <input type="text" ref={usernameRef} />
            email: <input type="email" value={useremail} onChange={(e) => setUseremail(e.target.value)} />
            emailoutput: <h3>{useremail}</h3>
            usernameoutput: <h3>{usernameRef.current?.value}</h3>
            <button type="button" onClick={handleSubmit}>Submit</button>
        </form>
        </>
    )
};
export default Example1;