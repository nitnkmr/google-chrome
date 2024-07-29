import React from 'react'
import { useEffect,useState } from 'react';
import svgfast from "../../assets/logo/svgfast.svg"
import svgsearch from "../../assets/logo/svgsearch.svg"
import svgpaint from "../../assets/logo/svgpaint.svg"

import './Button.css'


const data = [
  {
  text:"Fast",
  icon:svgfast,
 background:"#E8F0FE",
 color:"#188038"
},
  {
  text:"Safe",
  icon:svgsearch,
  background:"#E8F0FE",
  color:"#1967D2"
},
  {
  text:"Yours",
  icon:svgpaint,
  background:"#FCE8E6",
  color:"#EA4335"
},

]

const mountedStyle = {

  animation: 'fadeIn ease-in-out 1s forwards infinite',
};

const unmountedStyle = {
  animation: 'fadeOut 270ms ease-out',
  animationFillMode: 'forwards',
};

const Buttons = ({index}) => {

  let [count , setCount] = useState(0)
  const [showComponent, setShowComponent] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setShowComponent(!showComponent);
      console.log(count);
      console.log(showComponent);
      count<index?setCount(count+1):setCount(0)
    },[2500])

  })

 
  return (
    <>
    
     <div className="button" > 
        <div className="div" style={{background:data[count].background, color:data[count].color }}><object id='icon' type="image/svg+xml" data={data[count].icon}></object>{data[count].text}</div>
     </div>

    </>
  )
}

export default Buttons