import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
function Passwordgenerator(){
  const[Password,setpassword]=useState('')
  const[length,setlength]=useState(10)
  const[Numberchanged,setnumberchanged]=useState(false)
  const[Characterchanged,setcharchanged]=useState(false)

  function generatepassword(){
    let str="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(Numberchanged)
      str+="0123456789";
    if(Characterchanged){
      str+="~!@#$%^&*|+_?*";
    }

    let pass="";
    for(let i=0;i<length;i++){
      pass+=str[Math.floor(Math.random()*str.length)]
    }
    setpassword(pass)
  }
  useEffect(()=>{
    generatepassword()
  },[length,Numberchanged,Characterchanged])

  return(
     <>
      <h1>Password is:{Password}</h1>

      <div className="second">
        <input type="range" min={5} max={50} value={length} onChange={(e)=>setlength(e.target.value)}></input>
        <label>Length is:({length})</label>
        
        <input type="checkbox" defaultChecked={Numberchanged} onChange={(e)=>setnumberchanged(!Numberchanged)}></input>
        <label>Number Checked</label>
 
        <input type="checkbox" defaultChecked={Characterchanged} onChange={(e)=>setcharchanged(!Characterchanged)}></input>
        <label>Character</label>
        
      </div>
     </>
  )
}
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(<Passwordgenerator/>)