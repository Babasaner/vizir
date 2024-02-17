import React from 'react'
import './header.css'
import {
    Link,
    
  } from "react-router-dom";
  
const header = () => {
  return (
    <header>
     
    <nav className="global-nav do_global_nav">
	<div className="global-nav__inner">
    <Link to="/" className="global-nav__logo">VIZIR GROUP</Link>
		<ul className="global-nav__top">
            
			<li><a href="#"><span>Contact</span></a></li>
			
			<li>    
</li>

			<li className="global-nav__top__menu"><button id="toggle-menu" className="menu-toggle"><i className="icon--menu"></i><span>Menu</span></button></li>
		</ul>

		
		<ul className="global-nav__social">
			<li><a href="">Suivez nous sur les réseaux sociaux</a></li>
			<li><a href="#" target="_blank" title="Twitter"><i className="icon--twitter"></i><span>Twitter</span></a></li>
			<li><a href="#" target="_blank" title="Linkedin"><i className="icon--linkedin"></i><span>Linkedin</span></a></li>
            <li><a href="#" target="_blank" title="Facebook"><i className="icon--facebook"></i><span>Facebook</span></a></li>
			<li><a href="#" target="_blank" title="Instagram"><i className="icon--instagram"></i><span>Instagram</span></a></li>
		</ul>
		
	</div>
</nav>
<ul className="global-nav__menu">
	<li className="global-nav__menu__item">
        <Link to="/projet">
            Projet
            <span className="global-nav__menu__item__subtitle"> <br />An overview of our work</span>
        </Link>
        
    </li>
	<li className="global-nav__menu__item">
<Link to="/a-propos">
à propos
            <span className="global-nav__menu__item__subtitle">What&#39;s going on</span>
</Link>
       
    </li>
    <li className="global-nav__menu__item">
        <Link to="/services">
        Notre expertise
            <span className="global-nav__menu__item__subtitle"></span>
        </Link>
       
    </li>
	<li className="global-nav__menu__item">
        <Link to="/reseau">
       
            Réseau
            <span className="global-nav__menu__item__subtitle"></span>
      
        </Link>
        
    </li>
	<li className="global-nav__menu__item">
        <Link to="/contact">
        Contact
            <span className="global-nav__menu__item__subtitle"></span>
        </Link>
       
    </li>
</ul>
    </header>
  )
}

export default header
