import React from 'react'
import Message from './Message'
import ToDo from "./ToDo"

function Input({value,SetTheText,SetTheVal,val,deleteit}) {
  return (
  <>
    <div className="input-container">
    <input type="text" placeholder="Enter the Task" value={value} onChange={SetTheText} />
    <button onClick={SetTheVal}>+</button>
    <ToDo val={val} deleteit={deleteit}/>


</div>

</> 
)
     
}

export default Input