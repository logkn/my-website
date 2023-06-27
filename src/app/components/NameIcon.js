import React from 'react'
import { Caveat_Brush } from 'next/font/google'

const caveat_brush = Caveat_Brush({ subsets: ['latin'], weight: ['400']})

const NameIcon = () => {
    var cname = caveat_brush.className
    cname += " text-3xl self-start"
  return (
    <h1 style={{color: "white"}} className={cname}>LoganKnapp</h1>
  )
}

export default NameIcon