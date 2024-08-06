import React from 'react'
import Message from './Message'

function ToDo({val,deleteit}) {
  return (
    <>
    {val.map((v,index)=>{
      return <Message v={v} index={index} deleteit={deleteit}/>
        
})
}
</>
)
}

export default ToDo