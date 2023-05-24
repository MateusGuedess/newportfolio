import React from 'react'
import { usePlay } from '../contexts/Play'
import { motion, AnimatePresence } from "framer-motion";


function Me() {
  const {scrollMoment} = usePlay()
  //  console.log(scrollMoment)
  return (
    <AnimatePresence>
      {scrollMoment > 0.11 && scrollMoment < 0.15 && <motion.div  
      className="about-me"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: scrollMoment * 8, opacity: 1 }}
      exit={{ opacity: 0, scale: 1 }}
      
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.5,
        duration: 1000
      }}>
        <img src="https://placehold.co/200x230" width="200"height="230"/>
        <div  className="article">
          <h2>Mateus Guedes da Conceição</h2>
          Mussum Ipsum, cacilds vidis litro abertis. Mé faiz elementum girarzis, nisi eros vermeio.
          Suco de cevadiss deixa as pessoas mais interessantis.Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum.Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!
        </div>
      </motion.div>}
    </AnimatePresence>
  )
}

export default Me