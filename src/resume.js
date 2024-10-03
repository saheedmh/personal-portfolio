import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import Pageheader from './headertest'
import {BsInfoCircleFill} from 'react-icons/bs'


import { Resumedata } from './resumeData'
import {MdWork} from 'react-icons/md'
import "./style/resume.css"
const Resume = () => {
  return (
    <section id='resume' className='resume'>
    <Pageheader

      headerText="resume"
      Icon={<BsInfoCircleFill size={40}/>}
    />
    <div className="timeline">
<div className="timeline__education">
        <h3 className='timeline__experience__header-text'>education</h3>
        <VerticalTimeline 
        layout={'1-column'}
        lineColor="var(--yellow-theme-main-color)"
        >
        {
          Resumedata.education.map((item, i) =>(
            <VerticalTimelineElement 
            key={1}
            className='timeline__experience__vertical-timeline-element' 
            contentStyle={{
              background:'none',
              color:'var(--yellow-theme-sub-text-color)',
              border:'1.5px solid var(--yellow-theme-main-color)'

            }}
            
            icon={<MdWork/>}
            iconStyle={{
              background:'#181818',
            }}
        
            >
              <div className='vertical-timeline-element-title-wrapper'>
              <h3 className='vertical-timeline-element-title'>
                {item.title}
              </h3>
              <h4 className='vertical-timeline-element-subtitle'>
                {item.subtitle}
              </h4>
              
              </div>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          ))
        }

        </VerticalTimeline>
      </div>


    
      <div className="timeline__experience">
        <h3 className='timeline__experience__header-text'>Experience</h3>
        <VerticalTimeline 
        layout={'1-column'}
        lineColor="var(--yellow-theme-main-color)"
        >
        {
          Resumedata.experience.map((item, i) =>(
            <VerticalTimelineElement 
            key={1}
            className='timeline__experience__vertical-timeline-element' 
            contentStyle={{
              background:'none',
              color:'var(--yellow-theme-sub-text-color)',
              border:'1.5px solid var(--yellow-theme-main-color)'

            }}
            date="2022-present"
            icon={<MdWork/>}
            iconStyle={{
              background:'#181818',
            }}
             >
              <div className='vertical-timeline-element-title-wrapper'>
              <h3 className='vertical-timeline-element-title'>
                {item.title}
              </h3>
              <h4 className='vertical-timeline-element-subtitle'>
                {item.subtitle}
              </h4>
              
              </div>
              <p>{item.description}</p>
            </VerticalTimelineElement>
          ))
        }

        </VerticalTimeline>
      </div>


      
    </div>
    </section>
  )
}

export default Resume
