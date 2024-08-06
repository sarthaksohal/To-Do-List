import React from 'react'

function Message({v,index,deleteit}) {
  return (
    <div className="message-container">
    <p>{v}</p>
    <button onClick={()=>deleteit(index)}>Delete</button>
  </div>
 
  )
}

export default Message