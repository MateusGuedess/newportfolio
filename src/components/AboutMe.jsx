import React from 'react'
import { usePlay } from '../contexts/Play'
import { motion, AnimatePresence } from "framer-motion";
import ProfilePhoto from "../assets/Profile.png"

function AboutMe() {
  const {scrollMoment} = usePlay()

  return (
    <AnimatePresence>
      {scrollMoment >= 0.1 && scrollMoment <= 0.2 && <motion.div  
      className="about-me"
      initial={{  x: -300 }}
      animate={{  x: 0 }}
      exit={{ opacity: 0}}  
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.5,
        duration: 3,
        ease: "easeIn"
      }}>
        <img src={ProfilePhoto} />
        <div  className="article">
          <h2>Mateus Guedes da Conceição</h2>
          Um desenvolvedor de 26 anos, motivado a aprender, que está sempre buscando novos desafios que possa influenciar no meu desenvolvimento profissional, e que ama conhecer novas pessoas e trocar novas experiências com outro profissionais, que ama assistir futebol, mas também gosta de jogar video game e está pronto pra qualquer desafio a qualquer momento.
        </div>
      </motion.div>}
    </AnimatePresence>
  )
}

export default AboutMe