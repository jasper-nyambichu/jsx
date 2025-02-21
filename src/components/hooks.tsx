import {useState} from "react"

 function Counter()
{
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("")
    function handleClick()
    {
        if(count >=9) 
        {
            setCount(0)
            setMessage("Maximum count reached! Resetting to zero.");
        }
        else
        {
            setCount(count + 1);
            setMessage("");
            
        }
    }
    return(
        <>
        
        <button onClick={handleClick} className="btn btn-secondary  mx-5 my-5">
            Click {count} Me
        </button>
        {message && <p style={{color: "red", marginTop: "10px"}}>{message}</p>}
        
        </>
        
    )
}
export default Counter;