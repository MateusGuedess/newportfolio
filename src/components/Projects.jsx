import React, { useState} from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Profile from "../assets/Profile.png"
import { usePlay } from '../contexts/Play';


function Projects() {
    const [selected, setSelected] = useState(0)

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
        {/* {scrollMoment >= 0.23 && scrollMoment <= 0.35 && */}
            <motion.div 
            initial={{
                opacity: 0,
                scale: 0,
            }}
            animate={{
                opacity: 1,
                scale: 1
            }}      
            exit={{
                opacity: 0, 
                scale: 0
            }}  
            transition={{
                ease: "linear",
                duration: 3,
            }}
            className="projects"
        >
            {projects.map((item, index) => {
                if(index == selected) {
                    return(
                        <motion.div
                            key={index}
                            className="projects-image"
                            initial={{
                                x: -20
                            }} 
                            style={{  backgroundImage: `url(${Profile})`}}
                            animate={{
                                x: 0
                            }}      
                            exit={{
                                x: 40
                            }} 
                            transition={{
                                ease: "linear",
                                duration: 2,
                                opacity: {
                                    duration: 0.5
                                }
                            }}
                        >
    
                            <h2>{item?.title}</h2>
                            <p>
                            {item?.description}
                            </p>
                        </motion.div>
                    )}
                }
            )}
            <motion.i
                onClick={() => selected != 2 ? setSelected(selected + 1) : setSelected(0)}
                initial={{
                    x:-80
                }}
                animate={{
                    x: 230
                }}      
                transition={{
                    ease: "linear",
                    duration: 3,
                }}
                onHoverStart={{
                    scale: 1.1
                }}
            style={{fontSize: "26px", color: "white",position: 'absolute', top: "35%"}} class="fa-solid fa-chevron-right"></motion.i>
            <motion.i
                onClick={() => selected != 2 ? setSelected(selected + 1) : setSelected(0)}
                initial={{
                    x:-80
                }}
                animate={{
                    x: 100
                }}      
                transition={{
                    ease: "linear",
                    duration: 3,
                }}
                onHoverStart={{
                    scale: 1.1
                }}
                style={{
                    fontSize: "26px", 
                    color: "white",
                    position: 'absolute', 
                    top: "35%"
                }} class="fa-solid fa-chevron-left"></motion.i>
        </motion.div>
        // }
    </AnimatePresence>
  )
}

export default Projects