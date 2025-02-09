import React from 'react';
import './Intro.css';
import GitHub from '../../img/github.png';
import LinkedIn from '../../img/linkedIn.png';
import Instagram from '../../img/insta.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import me from '../../img/me.png';
import emoji from '../../img/glassesEmoji.png';
import crown from '../../img/crown.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import glassesEmoji from '../../img/glassesEmoji.png';
import thumbsup from '../../img/thumbsup.png'

function Intro() {
  return (
    <div className='intro'>
        <div className='i-left'>
        <div className='i-name'>
            <span>Hi! I am</span>
            <span>Aishwarya</span>
            <span>A software engineer proficient in diverse aspects of front-end and back-end development. Additionally, possesses a solid grasp of Machine Learning and Big Data concepts.</span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
            <a href='https://github.com/Aishwarya-hackathon'>
                <img src={GitHub} alt="" />
            </a>
            <a href='https://linkedin.com/in/aishwarya-30b47b196'>
                <img src={LinkedIn} alt="" />
            </a>
            <a href='https://www.instagram.com/_aish_rao?igsh=YzVkOTdmMw=='>
                <img src={Instagram} alt="" />
            </a>
        </div>
        </div>

        <div className='i-right'>
            <img src={Vector1} alt=''/>
            <img src={Vector2} alt='' />
            <img src={me} alt='' />
            <img src={glassesEmoji} alt='' />
            <div style={{top: '-4%', left: '63%'}}>
                <FloatingDiv image={crown} txt1='Full-Stack' txt2='Developer'/>
            </div>
            <div style={{top:'18rem', left:'0rem'}}>
                <FloatingDiv image={thumbsup} txt1='C++, JAVA, Python' txt2=''/>
            </div>
            
            <div className='blur' style={{ background: "rgb(238 210 255)" }}></div>
            <div className='blur' style={{background: '#C1F5FF', top: '17rem', width: '21rem', height: '11rem', left: '-9rem'}} ></div>
        </div>
    </div>
  )
}

export default Intro