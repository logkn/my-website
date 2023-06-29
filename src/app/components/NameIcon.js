import React from 'react'
import { Splash } from 'next/font/google'

const font_class = Splash({ subsets: ['latin'], weight: ['400']})

const NameIcon = () => {
    var cname = font_class.className
    cname += " text-sm self-start"
  return (
    <div style={{color: "white"}} className={cname}>
      <div className="flex flex-col text-2xl">
        <p >Logan</p>
        <p className="ml-3 -mt-4">Knapp</p>
      </div>
    </div>
    
  )
}

export default NameIcon