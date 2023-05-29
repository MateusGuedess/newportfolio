import React, { useState} from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Profile from "../../assets/Profile.png"
import { usePlay } from '../../contexts/Play';

function Projects() {
    const {scrollMoment} = usePlay()

    const projects = [
        {
            title: "Project 1",
            description: "Description of project 1",
            thumb: Profile
        },
        {
            title: "Project 2",
            description: "Description of project 2",
            thumb: Profile
        },
        {
            title: "Project 3",
            description: "Description of project 3",
            thumb: Profile
        },
    ]
  return (
    <AnimatePresence>
        {scrollMoment >= 0.23 && scrollMoment <= 0.35 &&
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
            {projects.map((item, index) => {
                    return(
                        <div
                            key={index}
                            className="projects__card"
                        >
                            <img src={Profile} />
    
                            <h2>{item?.title}</h2>
                            <p>
                            {item?.description}
                            </p>
                        </div>
                    )}
            )}
        </motion.div>
         }
    </AnimatePresence>
  )
}

export default Projects