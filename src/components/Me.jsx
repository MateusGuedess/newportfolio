import React from 'react'
import { usePlay } from '../contexts/Play'
import { motion, AnimatePresence } from "framer-motion";


function Me() {
  const {scrollMoment} = usePlay()
  //  console.log(scrollMoment)
  return (
    <AnimatePresence>
      {scrollMoment > 0.13 && scrollMoment < 0.15 && <motion.div  
      className="about-me"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: scrollMoment * 8, opacity: 1 }}
      exit={{ opacity: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}>Me</motion.div>}
    </AnimatePresence>
  )
}

export default Me