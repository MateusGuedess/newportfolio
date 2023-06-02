import React from 'react'
import { motion, AnimatePresence } from "framer-motion";
import { usePlay } from '../../contexts/Play';
import "./index.css"
import TShirt from "../../assets/tshirt.png"

function Projects() {
    const {scrollMoment} = usePlay()

    const projects = [
        {
            title: "Camiseta 3D",
            description: "Projeto com threeJs utilizando modelos 3d",
            thumb: TShirt
        },
        // {
        //     title: "Project 2",
        //     description: "Description of project 2",
        //     thumb: Profile
        // },
        // {
        //     title: "Project 3",
        //     description: "Description of project 3",
        //     thumb: Profile
        // },
    ]
  return (
    <AnimatePresence>
        {scrollMoment >= 0.22 && scrollMoment <= 0.35 &&
            <motion.div  
            className="projects"
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
                <div className="projects__header">
                    <h2>Projects</h2>
                </div>
                <div
                    className="projects__body"
                >
                {projects.map((item, index) => {
                        return(
                            <div key={index} className="projects__card" style={{backgroundImage: `url(${item?.thumb})`}}>       
                                <div className='card__footer'>
                                    <span>{item?.title}</span>
                                    <p>
                                        {item?.description}
                                    </p>
                                </div>
                            </div>
                        )}
                )}
                </div>
        </motion.div>
        } 
    </AnimatePresence>
  )
}

export default Projects