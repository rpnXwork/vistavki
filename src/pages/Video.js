import React from 'react'
import video from './video/video.webm'
import './style/Video.css'

const Video = () => {

    return (
        <div className="video-frame">
            <video src={video} loop muted autoPlay className="video"/>
        </div>
        )
    }

export default Video