import React from 'react'
import './accueil.css'

import Header from '../../component/header/header';
import Slide from '../../component/slide/slide';
import Services from '../../component/services/services';
import Actualites from '../../component/actualites/actu'
import Projet from '../../component/project/projet';
import Video from '../../component/video/video';
import Footer from '../../component/footer/footer';
const accueil = () => {
  return (
    <div>
      <Header/>
    <main id="main-content" role="main" className="home do_home">
      <Slide/>
      <Services/>
      <div>
      <Projet/>
      </div>
      <section>
        <Actualites/>
      </section>
      <Video/>
      <Footer/>
    </main>
    </div>
  )
}

export default accueil
