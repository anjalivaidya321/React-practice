import React, { useEffect, useState } from "react";

function NumSort(){

    const[dataa,setdataa]=useState([])

    useEffect(()=>{
         fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then ((data)=>{
        const womenm=data.filter((item)=>item.category==="women's clothing")
        womenm.sort((a,b)=>b.price-a.price)
        setdataa(womenm)
    })
    .catch((err)=>console.log(err))
    },[])
   


return(
    <>
    <ul>
        {dataa.map((item,index)=>(
        <li key={index}>{item.title}-{item.price}</li>
      ))}
    </ul>
      
      
      
    </>
)
}
export default NumSort
