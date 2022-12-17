import React, { useState } from 'react'
import "./About.css"


const About = () => {
    let hoveredImage = "https://assets.website-files.com/61554cf069663530fc823d21/615892bd8e442b425f275e0d_2-min.png"
    let firstImage = "https://news.artnet.com/app/news-upload/2022/12/prisma-labs-lensa-ai.jpg"
    const [imgUrl,setImgUrl] = useState(firstImage)

    
const changeImage = (hoveredImage) => {
    setImgUrl(hoveredImage)
}

const changeImageBack = () => {
    setImgUrl(firstImage)
}

  return (
    <div className='container'>
        <div className="image_holder" onMouseOut={() => changeImage(hoveredImage)} onMouseLeave={() => changeImageBack(firstImage)}>
            <img src = {imgUrl} alt="" />
            <div className="overlay" >
                <h1>Generate them with AI</h1>
            </div>
        </div>

        <div className="info">
            <label>Who are we ?</label>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab corporis eius modi quibusdam aliquam voluptatem ducimus vel ullam, itaque quia saepe sequi mollitia, temporibus repellat. Minus explicabo ipsa ex soluta!</p>

            <label>What do we do ?</label>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cum id quisquam nesciunt! Beatae impedit eos, accusamus sequi voluptates molestiae ipsa deleniti enim excepturi ab, quos commodi hic ad natus.</p>

            <label>How do we do it ?</label>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima harum pariatur voluptas veritatis provident! Laboriosam atque voluptatum et porro sed cumque modi, eos ex, sit nulla debitis distinctio. Cupiditate, dolorum.</p>

        </div>
    </div>
  )
}

export default About