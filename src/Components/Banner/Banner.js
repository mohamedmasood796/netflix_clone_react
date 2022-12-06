import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie</h1>
            <div className='banner_buttons'>
                <button className='button'>play </button>
                <button className='button'>My list </button>
            </div>
            <h1 className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ea dolorem officiis a illo odio, maiores ab quae sit consectetur debitis nobis reprehenderit optio voluptates doloremque blanditiis. Illo, deserunt cupiditate.</h1>
        </div>
    <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner