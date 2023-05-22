import { useProgress } from '@react-three/drei'
import React from 'react'
import { usePlay } from '../contexts/Play'

function Overlay() {
    const {progress} = useProgress()
    const {play, setPlay} = usePlay()

  return (
    <div className="overlay">
        <div className={`loader ${progress === 100 ? "loader--disappear": ""}`} />
        {progress === 100 && (
            <div className={`intro ${play ? "intro--disappear" : ""}`}>
                <h1 className="logo">Mateus Guedes</h1>
                <div className="spinner">
                    <div className="spinner__image" />
                </div>
                <button className="explore" onClick={() => setPlay(true)}>
                    Explore
                </button>
            </div>
        )}
    </div>
  )
}

export default Overlay