import { useState } from "react";

function Counter(){
    // React - hooks for functional components 
    // Use State
    // Syntax - const[state, setState]= useState(initial value)
    const [count, setCount ] = useState(0);
    function increment(){
        setCount(count + 1);
    }
    return(
        <div>
            Hello this is Counter component!!
           <h1> The count value is {count} </h1>
           <button onClick={increment}>Increment</button>
        </div>
    )
}

export default Counter;