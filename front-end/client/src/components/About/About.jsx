import React from 'react'
import "./About.css"

const About = () => {
  return (
    <div className='container'>
        <div className="image_holder">
            <img src="https://news.artnet.com/app/news-upload/2022/12/prisma-labs-lensa-ai.jpg" alt=""/>
            <div className="overlay">
                <h1>Generate them with AI</h1>
            </div>
        </div>

        <div className="info">
            <h1>Who are we ?</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab corporis eius modi quibusdam aliquam voluptatem ducimus vel ullam, itaque quia saepe sequi mollitia, temporibus repellat. Minus explicabo ipsa ex soluta!</p>

            <h1>What do we do ?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos cum id quisquam nesciunt! Beatae impedit eos, accusamus sequi voluptates molestiae ipsa deleniti enim excepturi ab, quos commodi hic ad natus.</p>

            <h1>How do we do it ?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima harum pariatur voluptas veritatis provident! Laboriosam atque voluptatum et porro sed cumque modi, eos ex, sit nulla debitis distinctio. Cupiditate, dolorum.</p>
        </div>
    </div>
  )
}

export default About