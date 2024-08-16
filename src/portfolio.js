import React, { useState } from 'react'
import Pageheader from './headertest'
import {BsInfoCircleFill} from 'react-icons/bs'
import Img1 from "./images/dribb1.png"
import Img3 from "./images/dribbble.png"
import Img4 from "./images/dribb3.png"
import Img5 from "./images/dribbble.png"
import Img6 from "./images/dribb1.png"
import './style/portfolio.css'

const PortfolioData =[
  {
      id: 2,
      image:Img1,
      name:"Crypto Currency Dashboard and  Financial visualization",
      gtihub:'https://github.com/saheedmh',
      demo:'https:https://dribbble.com/shots/22760145-Jobsity-Characters',
  },

  {
      id: 2,
      image:Img3,
     name:"charts tempelate & infographic in Figma",
      gtihub:'https://github.com/saheedmh',
      demo:'https://dribbble.com/shots/23210044-NVO-Trading-panel'
   },

   {
      id: 2,
      image:Img3,
    name:"Figma dashboard UI kit for data design web app",
      github:'https://github.com/saheedmh',
      demo:'https://dribbble.com/shots/23210044-NVO-Trading-panel'
   },
   {
      id: 3,
      image:Img4,
      name:"maintaining task and",
      github:'https://github.com/saheedmh',
      demo:'https://dribbble.com/shots/23210044-NVO-Trading-panel'
   },

   {
      id: 3,
      image:Img5,
      name : "Charts tempelate and infographic in figma",
      github:'https://github.com/saheedmh',
      demo:'https://dribbble.com/shots/23210044-NVO-Trading-panel'
   }
,
{
  id: 3,
  image:Img6,
  name:"Crypto Currency Dashboard and  Financial visualization",
  github:'https://github.com/saheedmh',
  demo:'https://dribbble.com/shots/23210044-NVO-Trading-panel'
}


]

const FilterData = [
  {
    filterId: 1,
    label : "All"
  },

  {
    filterId: 2,
    label : "Development"
  },

  {
    filterId: 3,
    label : "Design"
  }
]
const Portfolio = () => {  

  const [filterValue, setFilterValue] = useState(1)
  const [hovereValue, setHoverevalue] = useState(null);

  function handlehOver (index){
    setHoverevalue(index)
  }
  console.log(hovereValue);
  function handlefiltervalue (currentId){
setFilterValue(currentId)
  }

  const filteritem =  filterValue === 1 ?  PortfolioData:
  PortfolioData.filter(item =>item.id===filterValue)
console.log(filteritem);
  return (
    <section id='portfolio' className='portfolio'>
    <Pageheader

      headerText="portfolio"
      Icon={<BsInfoCircleFill size={40}/>}
    />

    <div className="portfolio__content">
      <ul className='portfolio__content__filter'>
      {FilterData.map((item)=>(
 <li className={item.filterId === filterValue ? 'active' : "" } id="portfolioId" onClick={()=> handlefiltervalue(item.filterId)} 
 key={item.filterId}>
  {item.label}
 </li>
      )
        )
     
      }
       
      </ul>
      <div className="portfolio__content__cards">
    
{
  filteritem.map((item, index)=>(
        <div className="portfolio__content__cards__item" key={`cardItem${item.name.trim()}`}
        onMouseEnter={()=> handlehOver(index)}
         onMouseLeave={()=> handlehOver(null)}
 
        >
        <div className="portfolio__content__cards__img" >
        
          <a >
            <img src={item.image} alt="dumm data" />
          </a>
        </div>
        <div className="overlay">
          {
            index === hovereValue && (
              <div>
                <p>{item.name}</p>
                <button>visit</button>
              </div>
            )
          }
        </div>
     </div>
       ))
}
</div>

    </div>
    
    </section>
  
  )
}

export default Portfolio
