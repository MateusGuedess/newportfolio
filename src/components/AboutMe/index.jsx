import React from 'react'
import { usePlay } from '../../contexts/Play'
import { motion, AnimatePresence } from "framer-motion";
import ProfilePhoto from "../../assets/Profile.png"
import "./index.css"

function AboutMe() {
  const {scrollMoment} = usePlay()

  return (
    <AnimatePresence>
      {scrollMoment >= 0.1 && scrollMoment <= 0.2 && <motion.div  
      className="aboutMe"
      initial={{  x: -300 }}
      animate={{  x: 0 }}
      exit={{ x: -300}}  
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.5,
        duration: 3,
        ease: "linear"
      }}>
        <div className="aboutMe--header">
          <img src={ProfilePhoto} />
          <div  className="aboutMe__info">
            <h2>Mateus Guedes da Conceição</h2>
            <h3>Idade: 26</h3>
          </div>
        </div>
        <span className="aboutMe__description">
        Sou um desenvolvedor de 26 anos, altamente motivado a aprender e sempre em busca de novos desafios para impulsionar meu desenvolvimento profissional. Tenho uma paixão por conhecer novas pessoas e trocar experiências com outros profissionais. Além disso, adoro assistir futebol e também sou um entusiasta de videogames.
        <br />
        Estou sempre pronto para encarar qualquer desafio que surja no meu caminho. Ao longo dos meus 8 anos de carreira como desenvolvedor, tenho me dedicado ao Javascript, principalmente na área de frontend. Nos últimos 4 anos, tenho trabalhado exclusivamente com React e Next JS. Além disso, estou estudando outras linguagens, como Flutter e React Native, ampliando assim meu conhecimento.
        <br />
        Meu foco principal tem sido me tornar um frontend excepcional, buscando constantemente aprimorar minhas habilidades nessa área.
        </span>
      </motion.div>}
    </AnimatePresence>
  )
}

export default AboutMe