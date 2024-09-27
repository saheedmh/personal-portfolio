import React from 'react'
import Pageheader from './headertest'
import {BsInfoCircleFill} from 'react-icons/bs'
import { SkillsData } from './util'
import {Line} from 'rc-progress'
import './style/skill.css'
import { Animate, AnimateKeyframes } from 'react-simple-animate'

const Skill = () => {
  return (
    <section id='skill' className='skill'>
    <Pageheader

      headerText="skill"
      Icon={<BsInfoCircleFill size={40}/>}
    />

    <div className="skill__content__wrapper">
      {
        SkillsData.map((item, i) => (
          <div className='skill__content__wrapper__inner__content'>
            <Animate
            play
            duration={ 1}
            delay={0.3}
            start={{
              transform:'translateX(-200px)'
            }}
            end={{
              transform:'translatex(0px)'
            }}>

         <h3 className='skill__content__header'>{item.label}</h3>
            
            <div className='front__end'>
      {
        item.data.map((skillITem, j) =>(
          <AnimateKeyframes
          play 
          duration={1}
          keyframes={["opacity: 1" , "opacity:0"]}
          iterationCount="1"
          >
          <div className="progressbar__wrapper" key={j}>
          <p>{skillITem.skillName}</p>
           <Line
          percent={skillITem.percentage}
          strokeWidth="2"
          strokeColor="var(--yellow-theme-main-color)"
         trailWidth="2"
         strokeLinecap="square"
          />

          </div>



          </AnimateKeyframes>
        )) 
      }
            </div>
            




            </Animate>
          </div>
        
        ))
      }
    </div>
    
    </section>
  )
}

export default Skill
