import React, { Component } from 'react';
import Slider from '../molecules/Carousel';

import Button from 'material-ui/RaisedButton';

// Photos

const animal1 = require("../../assets/photos/Portfolio/animals/w400-520089B2cH8Gd4.jpg")
const animal2 = require("../../assets/photos/Portfolio/animals/w400-520089GB5uf4KD.jpg")
const animal3 = require("../../assets/photos/Portfolio/animals/w400-520089GdxWUuaa.jpg")

const bodyBuilder1 = require("../../assets/photos/Portfolio/body-building/1.jpg")
const bodyBuilder2 = require("../../assets/photos/Portfolio/body-building/2.jpg")
const bodyBuilder3 = require("../../assets/photos/Portfolio/body-building/3.jpg")

const surfer1 = require("../../assets/photos/Portfolio/surf/1.jpg")
const surfer2 = require("../../assets/photos/Portfolio/surf/2.jpg")
const surfer3 = require("../../assets/photos/Portfolio/surf/3.jpg")

// const URL = process.env.REACT_APP_PUBLIC_URL
const animals = [
  {
    src: animal1,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: animal2,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: animal3,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
]

const bodyBuilders = [
  {
    src: bodyBuilder1,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: bodyBuilder2,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: bodyBuilder3,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
]

const surfers = [
  {
    src: surfer1,
    altText: 'Slide 1',
    caption: 'Slide 1'
  },
  {
    src: surfer2,
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: surfer3,
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
]

    const imageGroups = [surfers,animals,bodyBuilders]

    const carousels = imageGroups.map((imageGroup,index) =>
    {
      const slides = imageGroup.map((imageData,index) =>
      {
        const className = (index===0) ? ('carousel-item active') : ('carousel-item')
        return (
          <div class={className}>
          <img class="d-block w-100 " src={imageData.src} alt={imageData.altText} />
        </div>
        )}
    )
      return (
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
        {slides}
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
      </a>
    </div>
  )
  }
);

class HomePage extends Component {
  render() {

    return (
      [
        <div className="splash-screen">
          <div className="splash-banner">
            <div className="splash-image">
            </div>
            <div className='over-image'>
              <h2><b>Let us tell your story</b></h2>
              <Button className='demo-reel-button' secondary={true} label='SEE OUR DEMO REEL'/>
            </div>
          </div>
          <div className="splash-text">
            <p>InFrame Media Productions is a full service video production company and creative agency specializing in corporate, marketing, training, event and web viral videos located in Gold Coast Australia.</p>
          </div>
        </div>
        ,
        <div>{carousels}</div>
      ,
      <div className="carousels">
      <div className="home-portfoios">
      <h2>Production Portfolio</h2>
      <div className="slideshow-container">
      <Slider items={animals}/>
      </div>
      </div>,
      <div className="home-portfoios">
      <h2>Production Portfolio</h2>
      <div className="slideshow-container">
      <Slider items={bodyBuilders}/>
      </div>
      </div>,
      <div className="home-portfoios">
      <h2>Production Portfolio</h2>
      <div className="slideshow-container">
      <Slider items={surfers}/>
      </div>
      </div>
      </div>]
    )
  }
}

export default HomePage
