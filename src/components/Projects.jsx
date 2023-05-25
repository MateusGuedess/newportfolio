import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Profile from "../assets/Profile.png"

function Projects() {
  return (
    <AnimatePresence>
        <motion.div
            initial={{
                opacity: 0
            }}
            animate={{
                opacity: 1,
                x: 500
            }}      
            exit={{opacity: 0}}  
            transition={{
                ease: "linear",
                duration: 3,
                x: {
                    duration: 5
                }
            }}
        >
            <motion.div
                style={{
                    backgroundImage: `url(${Profile})`,
                    height: "464px",
                    width: "280px",
                    backgroundRepeat: "no-repeat, no-repeat",
                    backgroundSize: "contain"
                }}
            >

                <h1>Project 1</h1>
                <p>
                 Um desenvolvedor de 25 anos, motivado a aprender, que está sempre buscando novos desafios que possa influenciar no meu desenvolvimento profissional, mas que ama conhecer novas pessoas e trocar experiências com outro profissionais, que ama assistir futebol, mas também gosta de jogar video game e está pronto pra qualquer desafio a qualquer momento.
                </p>
            </motion.div>
        </motion.div>
    </AnimatePresence>
  )
}

export default Projects