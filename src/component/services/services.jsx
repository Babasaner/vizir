import React from 'react'
import './services.css'
import {
   Link
  } from "react-router-dom";
  

const services = () => {
  return (      
<div className="home-content">
    <div id="service-fancy-skew" className="fancy-skew" data-cat="service">

<h2><a href="en/page/7427/services.html" class="home__section-title">Services - Notre expertise</a></h2>

<div className="fancy-skew__items">
<ul id="service-skew-list" className="fancy-skew__list">
    
        <li >
            <div className="link-wrapper">
                
                <Link to="/Architecture">Architecture</Link>
            </div>
        </li>
    
        <li >
            <div className="link-wrapper">
                
                <Link to="/Marketing Immobilier">Marketing</Link>
            </div>
        </li>
    
        <li>
            <div className="link-wrapper">
                
                <Link to="/webdesign">webdesign</Link>
            </div>
        </li>
       
</ul>
</div>
</div>
    </div>
  )
}

export default services
