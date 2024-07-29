import React from 'react'
import videofile from "../../assets/videos/non-chrome.webm"
import lefticon from "../../assets/logo/left.svg"
import "./Silder.css"
import Buttons from '../Buttons/Buttons'


const Slider = () => {
   

    return (
        <>
            <div className="container">
                <h1 className="header">The <Buttons index={0}/> way to do things online</h1>
                <div className="videoContainer">

                    <div className="video"  >
                    <div className="content">
                        <h2>Prioritise performance</h2>
                        <div>Chrome is built for performance. Optimise your experience with features like Energy Saver and Memory Saver.</div>
                    </div>
                        <video autoPlay muted loop id='video'>
                            <source src={videofile} type='video/webm'  />
                        </video>
                    </div>
                   
                </div>
                <div className="sliderButton">
                    <div className="button right"><img src={lefticon} alt="" /></div>
                    <div className="button"><img src={lefticon} alt="" /></div>
                </div>
            </div>
        </>
    )
}

export default Slider