import React, { useState} from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Profile from "../assets/Profile.png"

function Projects() {
    const [selected, setSelected] = useState(0)

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
            style={{
                height: "464px",
                width: "280px",
                position: "absolute",
                top: 0,
                borderRadius: "10px",
                boxShadow: "0 6px 12px rgba(0, 0, 0, 0.23), 0 10px 40px rgba(0, 0, 0, 0.19)"
            }}
        >
            {projects.map((item, index) => {
                if(index == selected) {
                    return(
                        <motion.div
                            key={index}
                            style={{
                                backgroundImage: `url(${Profile})`,
                                height: "464px",
                                width: "280px",
                                backgroundRepeat: "no-repeat, no-repeat",
                                backgroundSize: "cover",
                                borderRadius: "10px"
                            }}
                            initial={{
                                x: 0
                            }} 
                            animate={{
                                x: -20
                            }}      
                            exit={{
                                x: 0
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
    </AnimatePresence>
  )
}

export default Projects