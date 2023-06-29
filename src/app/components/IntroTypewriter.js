'use client'
import React, {useRef} from 'react'
import { motion, stagger } from 'framer-motion'

const staggerMenuItems = stagger(10, { startDelay: 10 });

const prefixes = [
  ' ',
  ' ',
  'n ',
]

const titles = [
  'Software Engineer    ',
  'Data Scientist    ',
  'AI Researcher       ',
]

const title_colors = [
  'text-orange-300',
  'text-fuchsia-300',
  'text-indigo-300',
]

const IntroTypewriter = () => {
  // animate the text to look like a typewriter
  const textRef = useRef(null)
  const text = textRef.current
  const [title, setTitle] = React.useState('')
  const [color, setColor] = React.useState('')
  const [prefix, setPrefix] = React.useState(prefixes[0])
  const [index, setIndex] = React.useState(0)
  const [isDeleting, setIsDeleting] = React.useState(false)
  const [speed, setSpeed] = React.useState(120)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (isDeleting) {
        setTitle(title.substring(0, title.length - 1))
      } else {
        setTitle(title + titles[index].charAt(title.length))
      }
    }, speed)

    if (isDeleting) {
      setSpeed(30)
    } else {
      setSpeed(120)
    }

    if (!isDeleting && title === titles[index]) {
      setSpeed(1000)
      setIsDeleting(true)
    } else if (isDeleting && title === '') {
      setIsDeleting(false)
      setIndex((index + 1) % titles.length)
    }

    return () => clearTimeout(timer)
  })

  React.useEffect(() => {
    setColor(title_colors[index])
    setPrefix(prefixes[index])
  }, [index])

  return (
    <motion.div
      ref={textRef}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-row items-center justify-center"
    >
      <h1 className="text-3xl mt-6 mr-3">{"I'm a" + prefix}</h1>
      <h1 className={`text-3xl mt-6 font-mono ${color}`}>{title + "|"}</h1>
    </motion.div>
  )
}

export default IntroTypewriter