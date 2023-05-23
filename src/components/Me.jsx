import React from 'react'
import { usePlay } from '../contexts/Play'


function Me() {
  const {scrollMoment} = usePlay()
  // console.log(scrollMoment)
  return (
    <div className={`${scrollMoment > 0.1 ? 'show' : ''}`} style={{opacity: 0, position: "absolute", top: "30px", left: "50px"}}>Me</div>
  )
}

export default Me