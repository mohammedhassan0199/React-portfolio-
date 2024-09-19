import React from 'react'

function Demo(props) {
  return (
   <>
    <div>{props.intro}</div>
    <h1>{props.mainhead}</h1>
    <h2>{props.head}</h2>
    <div>{props.job}</div>
    <p>{props.desc}</p>
   
<img src={props.url} alt="" />
<div>{props.skils}</div>
    
    
   </>
    
    
  )
}

export default Demo