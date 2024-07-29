import { useEffect, useState, useRef } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Buttons from './Component/Buttons/Buttons'
import Navbar from './Component/Navbar/Navbar'
import Home from './Component/homepage/Home'
import Slider from './Component/videosection/Slider'

import gsap from 'gsap';
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(useGSAP);

function App() {

  useGSAP(() => {
    const animation = gsap
      .timeline({
        scrollTrigger: {
          trigger: '.video',
          scrub: true,
          start: 'top 20%',
          end: 'bottom 20%',
          markers: false
        }
      })
      .fromTo(
        '.video',
        {
          scale: 2,
          top:"55%",
          marginTop:"20%"
          
        },
        {
          scale: 1,
          top:"120%",
          stagger: 2,
          marginTop:"5%"
        }
      )
  })
  useGSAP(() => {
    const animation = gsap
      .timeline({
        scrollTrigger: {
          trigger: '.video ',
          scrub: true,
          start: 'top 30%',
          end: 'center 40%',
          markers:false,
        }
      })
      .fromTo(
        '.video video',
        {
          position:"absolute",
          bottom:0,
          height:"100%",
          width:"100%",
          
         

        },
        {
          position:"absolute",
          bottom:"-40%",
          right:"10%",
          height:"100%",
          width:"100%"
        }
      )
  })

  return (
    <>
      <Navbar />
      <Home />
      <Slider />
    </>
  )
}

export default App
