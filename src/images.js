import React, {useState} from 'react'


const Images = () => {
    const [images, setSelectedImg] = useState([
        './images/saheed.jpg',
    
        './images/saheed.jpg',
      ])
      
  return (
    <div>
      <div className="image">
        <div className="images">
          <img src="{images[0]}" alt=""  onClick={e=>setSelectedImg(0)} />
          <img src="{images[1]}" alt="" onClick={e=>setSelectedImg(1)}/>
        </div>
        <div className="mainImage">
          <img src="{images[]}" alt="" />
        </div>
        </div>

    </div>
  )
}

export default Images
