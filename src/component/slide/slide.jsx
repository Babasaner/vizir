import React from 'react'
import './slide.css'
import Slide1 from './Palmeraie-16.webp'
import Slide2 from './Villa-traore-8-scaled.webp'
import Slide3 from './Waalo-10.webp'
import Slide4 from './Waalo-2-scaled.webp'

const slide = () => {
  return (
    <>
      
      <div className="home-carousel">
            
            <div className="home-top_carousel-background">
                
                    <li className="home-top_carousel-bg__item">
                        <img src={Slide1}/>
                    </li>
                
                    <li className="home-top_carousel-bg__item">
                    <img src={Slide2}/>
                    </li>
                
                    <li className="home-top_carousel-bg__item">
                    <img src={Slide3}/>
                    </li>
                
                    <li className="home-top_carousel-bg__item">
                    <img src={Slide4}/>
                    </li>
                
                   
            </div>
        
        
            <div className="home-top_carousel-bg do_carousel">
                
                    <li className="home-top_carousel-bg__item">
                        
                            <p>Nous concevons nos produits en pensant à l'avenir.</p>
                        
                    </li>
                
                    <li className="home-top_carousel-bg__item">
                        
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            </p>
                        
                    </li>
                
                    <li className="home-top_carousel-bg__item">
                        
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                .</p>
                        
                    </li>
                
                    <li className="home-top_carousel-bg__item">
                        
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                </p>
                        
                    </li>
                
                   
                
                    
                
            </div>
        
    </div>


    </>
  )
}

export default slide
