'use client'
import Image from 'next/image'
import IntroTypewriter from './components/IntroTypewriter'
import Socials from './components/Socials'
import Header from './components/Header'
import { motion } from 'framer-motion'
import Constellation from './components/Constellation'

export default function Home() {

  const cursorVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    }
  }


  return (
    <div className="h-screen">
      <Header current_page="Home" />
      <div className="flex justify-center">
        
      <div className="
        flex flex-col items-center py-8 self-center
      ">
        <div className='m-6'>
              <Image
                src="/pfp.jpg"
                className="mx-auto rounded-full shadow-xl shadow-black"
                width={300}
                height={300}
              />
          </div>
            <div className='m-6 flex flex-row items-center'>
              <h1 className='text-4xl mr-5'>＞Hi, I'm</h1>
              <h1 className="text-5xl font-mono font-bold text-cyan-400">Logan</h1>
            </div>
          <div className="flex flex-row items-start">
            <motion.h1 initial={{opacity: 0}} animate={{opacity:1}} transition={{delay:2}} className="text-3xl font-mono mr-3 mt-6">
              I am 
            </motion.h1>
            <IntroTypewriter
              titles={["AI Researcher", "Data Scientist", "Software Developer"]}
              prefixes={["an ", "a ", "a "]}
              title_colors={["text-emerald-400 font-medium", "text-yellow-400 font-medium", "text-red-400 font-medium"]}
              stick={false}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
