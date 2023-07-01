'use client'
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const IntroTypewriter = ({ titles, title_colors, prefixes, stick, initialDelay = 2000}) => {
  const words = titles
  const textRef = useRef(null);
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('');
  const [prefix, setPrefix] = useState(prefixes[0]);
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(120);
  const [extraDelay, setExtraDelay] = useState(false);
  const [isStuck, setIsStuck] = useState(false);
  const [start, setStart] = useState(false)

  const cursor = isStuck ? '' : '|';

  useEffect(() => {
    const timer = setTimeout(() => {
      setStart(true)
    }, initialDelay);

    return () => clearTimeout(timer);
  }, [initialDelay]);

  useEffect(() => {
    if (!start) return;
    const timer = setTimeout(() => {
      if (extraDelay) {
        setExtraDelay(false);
        setTitle(title + " ");
      }
      else if (isDeleting) {
        setTitle(title.substring(0, title.length - 1));
      } else {
        setTitle(title + words[index].charAt(title.length));
      }
    }, speed);

    if (extraDelay) {
      setSpeed(500);
    } else if (isDeleting) {
      setSpeed(30);  // Adjust extra delay time here
    } else {
      setSpeed(120);
    }

    if (!isDeleting && title === words[index]) {
      if (stick && index === words.length - 1) {
        setIsStuck(true);
        return;
      }
      setExtraDelay(true);
      setIsDeleting(true);
    } else if (isDeleting && title === '') {
      setIsDeleting(false);
      setExtraDelay(false);
      setIndex((index + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [title, isDeleting, start]);

  useEffect(() => {
    setColor(title_colors[index]);
    setPrefix(prefixes[index]);
  }, [index]);

  return (
    start &&
    <motion.div
      ref={textRef}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-row items-center justify-center"
    >
      <h1 className="text-3xl font-mono mt-6 mr-3">{prefix}</h1>
      <h1 className={`text-3xl mt-6 font-mono ${color}`}>{title + cursor}</h1>
    </motion.div>
  );
};

export default IntroTypewriter;
