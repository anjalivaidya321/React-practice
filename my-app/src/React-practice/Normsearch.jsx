
import React, { useState} from "react";

function Searchs() {
const items = ["bhanana", "Apple", "Hair", "alter", "DE"]; // Corrected array const [input, setInput) useState(""); // Fixed state variable name
const[filter,setfilter]=useState(items)
const handle = (e) =>{
const inpval=e.target.value.toLowerCase();
setInput(inpval)
const filtered=items.filter((val,Index) => {return val.toLowerCase().includes (inpval)}) 
setfilter(filtered)
I}
const display=filter.map((item,index)=>{return(<>
<li key={index}>
{item}
</li>
</>)})

return (
<div >
<input type="text" value={input} onChange={handle} placeholder="Search for the ites"/>
<ul>
{display}
</ul>
</div>
)
}
export default Searchs
