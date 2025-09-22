import React, { useState } from "react";
function Todo(){
    const[value,setvalue]=useState("")
    const [display,setdisplay]=useState([])
    const[ind,setind]=useState(null)
    

    const handle=(e)=>{
        setvalue(e.target.value)
    }

    const sub=(e)=>{
          e.preventDefault();
          if(ind!==null){
            const arrayy=[...display]
              arrayy[ind]=value
              setdisplay(arrayy)
              setind(null)
            
          }
          else{
                 setdisplay([...display,value])
          }
          setvalue("")
    }

    const del=(val,index)=>{
        const arr=[...display]
        arr.splice(index,1)
        setdisplay(arr)
    }

    const update=(val,index)=>{
           setvalue(val)
           setind(index)


    }

    const content=display.map((item,index)=>{
        return(
            <>
            <li key={index}>{item}</li>
            <button onClick={() => del(index)}>Delete</button>
             <button onClick={() => update(item,index)}>Update</button>
            </>
        )
    })

    return(
        <>
        <form onSubmit={sub}>
            <input type="text" value={value} placeholder="Add any text" onChange={handle}/>
            <button type="submit">Submit</button>
        </form>
        <ul>
            {content}
        </ul>
        </>
    )
}
export default Todo