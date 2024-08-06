import { useState } from 'react'
import './App.css'
import Input from './Components/Input'
function App() {
  const [text,settext]=useState("")
  const [val,setVal]=useState([])
  function SetTheText(e){
    settext(e.target.value)
  }
  function SetTheVal(){
   if(text!=""){
    setVal((prev)=>[...prev,text])
    settext("")
  }
}
function deleteit(index){
  setVal((prev)=>(prev.filter((prev,prevIndex)=>{
    return prevIndex!=index;
  }
  ))  )
}
 
  return(
  <>
  <h1>TO DO LIST</h1>
  <Input value={text} SetTheText={SetTheText} SetTheVal={SetTheVal} val={val} deleteit={deleteit}/>
  </>
)
}

export default App
