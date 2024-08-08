import React from 'react'
import './style/testimonial.css'
import Avtr1 from "./images/computer.jpg"
import Avtr2 from "./images/computerladies.jpg"
import Avtr3 from "./images/alhaji.jpg"
import Avtr4 from "./images/tony.jpg"
import Avtr5 from "./images/dan.jpg"

// import Swiper core and required modules
import {  Navigation, Pagination,  Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
function Testimonia() {
  const data = [

    {
      avatar: Avtr1,
      name:"ferran joshua",
      review:"when i was looking looking for  a proffessional who would create and evolve my website,seidu deliver exactly what i want, it's always a pleasure working and seeing him, I enjoy meeting him as  he lives locally and always leave his place with a spring in my step and a smile on my face.", 
    },
    {
      avatar: Avtr2,
      name:"joe David",
      review:"when i was looking looking for  a proffessional who would create and evolve my website,seidu deliver exactly what i want, it's always a pleasure working and seeing him, I enjoy meeting him as  he lives locally and always leave his place with a spring in my step and a smile on my face.", 
    },

    {
      avatar: Avtr3,
      name:"Alhaj yusuf",
      review:'working with seidu opened my eyes to what was possible, both interms of programming ability and also an incredible level of customer services. when made promises  to meet deadlines, each one was met without breaking a sweat. he has not let us down ever since we have know him .'
    },
    {
      avatar: Avtr4,
      name:"anthony shuaibu ",
      review:'The website when completed completely surpassed all my expectation and i am totally thrilled. Any tweaks and edits that were needed were minimal and done quickly, seidu is exceptional web developer i have ever meet .'
    }
    ,
    {
      avatar: Avtr5,
      name:"Danjuma harun",
      review:'seidu transformed my bussiness website into something that was both visually stunning and very functional, i was so impressed, i returned for a complete re-branding project and he even took it upon himself to organise the printing of my stationery for me. The proof is in the pudding as they say.'
    }
    
  ]
  return (
    <section class='testimonial'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container Testimonial__container"
      
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      
      pagination={{ clickable: true }}
      >
        
        {
          data.map(({avatar, name, review}, index) =>{
            return (
              <SwiperSlide key={index} className='swiper-testimonials'>
      <div className="clients__avatar">
        <img src={avatar} alt="" className='avatar'/>
        </div>
      <h5 className='client__name'>{name}</h5>
      <small className='review'>{review}</small>
        </SwiperSlide >

            )
          })
        }
       
       </Swiper>
    </section>
  )
}

export default Testimonia
