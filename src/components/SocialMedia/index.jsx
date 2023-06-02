import React from 'react'
import "./index.css"
import Linkedin from "../../assets/linkedin.png"
import Github from "../../assets/github.png"
import Instagram from "../../assets/instagram.png"

function SocialMedia() {
  return (
    <div className="social-media">
        <a className="social-media__icon" href="https://www.linkedin.com/in/mateusguedess/" target='_blank'>
            <img  src={Linkedin} />
        </a>
        <a className="social-media__icon github" href="https://github.com/MateusGuedess" target='_blank'>
            <img  src={Github} />
        </a>
        <a className="social-media__icon"  href="https://www.instagram.com/mxteusg/" target='_blank'>
            <img  src={Instagram} />
        </a>
    </div>
  )
}

export default SocialMedia