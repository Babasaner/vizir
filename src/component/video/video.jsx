import React from 'react'
import './video.css'
import Monvideo from "./APPARTEMENTS DE LUXE OCEAN DREAM.mp4"
const video = () => {
  return (
    
      <div class="home-media-text">

<div class="cover-video-wrapper home-media-text__video">
<video src={Monvideo}
          
          muted
          autoPlay={"autoplay"}
          preLoad="auto"
          loop></video></div>


<p class="home-media-text__caption">
Vous souhaitez rejoindre notre équipe ?

    <span class="home-media-text__link">
        
      Nos offres
        
    </span>

</p>

<a href="#" class="cover-link"><span class="sr-only">Voir les offres d'emploi</span></a>
</div>

        





  )
}

export default video
