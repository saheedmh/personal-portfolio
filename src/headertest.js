import React from 'react'
import './style/pageheader.css'

const Pageheader = (props) => {
    const {headerText, Icon}  = props;
  return (
    <div className='wrappers'>
      <h2>{headerText}</h2>
      <span>{Icon}</span>
    </div>
  )
}

export default Pageheader;
