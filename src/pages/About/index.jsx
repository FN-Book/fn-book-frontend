import React from 'react'
import { AutomaticSlider, DevInfo } from '../../components'

import imgJen from '../../assets/images/slider/photoUser.png'
import imgJenColored from '../../assets/images/slider/photoUserColored.png'

import imgBeatriz from '../../assets/images/slider/beatriz.png'
import imgBeatrizColored from '../../assets/images/slider/beatriz-colored.png'

import imgCamilly from '../../assets/images/slider/camilly.png'
import imgCamillyColored from '../../assets/images/slider/camilly-colored.png'

import imgJenCosta from '../../assets/images/slider/beatriz.png'
import imgJenCostaColored from '../../assets/images/slider/beatriz-colored.png'

import imgJenParreira from '../../assets/images/slider/beatriz.png'
import imgJenParreiraColored from '../../assets/images/slider/beatriz-colored.png'

import imgGiovanni from '../../assets/images/slider/giovanni.png'
import imgGiovanniColored from '../../assets/images/slider/giovanni-colored.png'

import imgKalil from '../../assets/images/slider/kalil.png'
import imgKalilColored from '../../assets/images/slider/kalil-colored.png'

import imgManuela from '../../assets/images/slider/manuela.png'
import imgManuelaColored from '../../assets/images/slider/manuela-colored.png'

import imgVitoria from '../../assets/images/slider/vitoria.png'
import imgVitoriaColored from '../../assets/images/slider/vitoria-colored.png'


export default function About() {
  return (
    <div className="container-about">
      <AutomaticSlider>
        <DevInfo
          devName="Beatriz Matos"
          devFunction="pesquisadora"
          devPhoto={imgBeatriz}
          devPhotoHover={imgBeatrizColored}
        />
        <DevInfo
          devName="Camilly Lima"
          devFunction="desenvolvedora backend"
          devPhoto={imgCamilly}
          devPhotoHover={imgCamillyColored}
        />
        <DevInfo
          devName="Jennifer da Costa"
          devFunction="desenvolvedora frontend"
          devPhoto={imgJen}
          devPhotoHover={imgJenColored}
        />
        <DevInfo
          devName="Jennifer Parreira"
          devFunction="desenvolvedora backend"
          devPhoto={imgJen}
          devPhotoHover={imgJenColored}
        />
        <DevInfo
          devName="Giovani dos Reis"
          devFunction="desenvolvedor backend"
          devPhoto={imgGiovanni}
          devPhotoHover={imgGiovanniColored}
        />
        <DevInfo
          devName="Kalil Silva"
          devFunction="desenvolvedor backend"
          devPhoto={imgKalil}
          devPhotoHover={imgKalilColored}
        />
        <DevInfo
          devName="Manuela Souza"
          devFunction="desenvolvedora frontend"
          devPhoto={imgManuela}
          devPhotoHover={imgManuelaColored}
        />
        <DevInfo
          devName="Vitória Santos"
          devFunction="desenvolvedora frontend"
          devPhoto={imgVitoria}
          devPhotoHover={imgVitoriaColored}
        />
      </AutomaticSlider>
    </div>
  )
}