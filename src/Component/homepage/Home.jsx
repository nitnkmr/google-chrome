import React from 'react'
import icon from "../../assets/logo/chromelogo.svg"
import downloadIcon from "../../assets/logo/svgexport-2.svg"
import "./Home.css"
import Buttons from '../Buttons/Buttons'
const Home = () => {
  return (
    <>
    <div className="homePage">
        <div className="heroSection">
            <div className="heroIcons"><img src={icon} alt="heroIcons" /></div>
            <div className="heroHeader">The browser
                <div className='break'> built to be <Buttons index={2}/></div>
            </div>
            <div className="downloadButton">
                <button className='btn'>
                    <div className="logo"><img src={downloadIcon} alt="" /></div>
                    <div className="text">Download Chrome</div>
                </button>
                <div className="update">I want to update Chrome</div>
                <div className="version">For Windows 11/10 64-bit</div>
            </div>
            <div className="termsAndCondition">
                <div className="confirmation">
                    <input type="checkbox" name="confirm" id="confirm" />
                    <div className="context">
                    Help make Google Chrome better by automatically sending usage statistics and crash reports to Google. <span className='span'>Learn more</span>
                    </div>
                </div>
                <div className="extrainfo">By downloading Chrome, you agree to the <span className="span">Google Terms of Service</span> and <span className="span">Chrome and ChromeOS Additional Terms of Service</span></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home