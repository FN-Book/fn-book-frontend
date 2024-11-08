import React from 'react'
import { AutomaticSlider, DevInfo } from '../../components'
import imgJen from '../../assets/images/slider/photoUser.png'
import imgJenColored from '../../assets/images/slider/photoUserColored.png'


export default function About() {
  return (
    <div className="container-about">
      <AutomaticSlider>
        <DevInfo
          devName="Jennifer Costa"
          devFunction="desenvolvedora frontend"
          devPhoto={imgJen}
          devPhotoHover={imgJenColored}
        />
        <DevInfo
          devName="Manuela Souza"
          devFunction="desenvolvedora frontend"
          devPhoto={imgJen}
          devPhotoHover={imgJenColored}
        />
      </AutomaticSlider>
    </div>
  )
}