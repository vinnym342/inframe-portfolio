import React, { Component } from 'react';
import Slider from '../molecules/Carousel';
import Line from '../atoms/Line';

import Button from 'material-ui/RaisedButton';

// Production Portfolio

const animal1 = require("../../assets/photos/Portfolio/animals/w400-520089B2cH8Gd4.jpg")
const animal2 = require("../../assets/photos/Portfolio/animals/w400-520089GB5uf4KD.jpg")
const animal3 = require("../../assets/photos/Portfolio/animals/w400-520089GdxWUuaa.jpg")

const bodyBuilder1 = require("../../assets/photos/Portfolio/body-building/1.jpg")
const bodyBuilder2 = require("../../assets/photos/Portfolio/body-building/2.jpg")
const bodyBuilder3 = require("../../assets/photos/Portfolio/body-building/3.jpg")

const surfer1 = require("../../assets/photos/Portfolio/surf/1.jpg")
const surfer2 = require("../../assets/photos/Portfolio/surf/2.jpg")
const surfer3 = require("../../assets/photos/Portfolio/surf/3.jpg")

const vid1 = require("../../assets/videos/HomePage/1.mp4")

// const URL = process.env.REACT_APP_PUBLIC_URL

class HomePage extends Component {
  render() {

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
    const carouselId = "carousel" + index.toString()
      return (
        <div className="carousel-container"><div id={carouselId} class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target={"#" + carouselId} data-slide-to="0" class="active"></li>
          <li data-target={"#" + carouselId} data-slide-to="1"></li>
          <li data-target={"#" + carouselId} data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
        {slides}
      </div>
      <a class="carousel-control-prev" href={"#" + carouselId} role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href={"#" + carouselId} role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div></div>
    )
    }
    )

// Process
const ellipse = require("../../assets/photos/HomePage/dots/Ellipse.png")
const ellipse2 = require("../../assets/photos/HomePage/dots/Ellipse2.png")
const ellipse3 = require("../../assets/photos/HomePage/dots/Ellipse3.png")
const ellipse4 = require("../../assets/photos/HomePage/dots/Ellipse4.png")




    return (
      [
        <div className="hompage-component splash-screen">
          <div className="splash-banner">
            <div className="splash-image">
            </div>
            <div className='over-image'>
              <h2><b>Let us tell your story</b></h2>
              <Button
              primary={true}
              className='demo-reel-button'
              label='SEE OUR DEMO REEL'/>
            </div>
          </div>
          <div className="splash-text">
            <p>InFrame Media Productions is a full service video production company and creative agency specializing in corporate, marketing, training, event and web viral videos located in Gold Coast Australia.</p>
          </div>
        </div>
        ,<div className="hompage-component production-portfolio">
        <h1>Production Portfolio</h1>
        <Line/>
        {carousels}
        <div className="videos">
        <div style={{maxWidth: '80%'}} className="video">
          <video controls>
            <source src={vid1} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </div>
        <div style={{maxWidth: '80%'}} className="video">
          <video controls>
            <source src={vid1} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </div>
        </div>
        <Button
        primary={true}
        label="View our portfolio"/>
        </div>,
      <div className="hompage-component process">
      <div className="ellipse-container">
        <div className="elipses">
{/*          <img src={ellipse} alt="ellipse"/>
          <img src="" alt="Arrow"/>
          <img src={ellipse2} alt="ellipse2"/>
          <img src="" alt="Arrow"/>
          <img src={ellipse3} alt="ellipse3"/>
          <img src="" alt="Arrow"/>
          <img src={ellipse4} alt="ellipse4"/>*/}
        </div>
      </div>
      <h4>InFrame Media Productions is a local Gold Coast business working on a national scale, to provide even the smallest companies world class imagery.</h4>
      <Button
      primary={true}
      label="READ MORE" />
      </div>,
      <div className="about">
      <p>{`We want you to think of us as your in-house video production company Whether you need a web commercial, event video, corporate media communications, employee stories, testimonial customer stories, explainer video, motion graphics or coverage of live events, InFrame Media will work with you to develop and produce engaging content that successfully connects with your audience.

The heart of what we do is story telling. We’ve been doing what we love since 1999. When we opened our first studio in the Philippines through its founder, Pablo Llige. From then on, InFrame Media Productions has been in the forefront of media coverage for everything from AVP's, Photo and Video Coverage and Editing services. InFrame Media Productions is a highly sought-after outfit as its reputation for high level professional media services remains unsurpassed.

We work closely with your marketing team to help launch your company or product/s to differentiate you from your competitors. We believe that InFrame Media has a special blend of unique creativity, story telling and collaborative approach.`}
</p></div>,
<div className="hompage-component testimonial">
<h4>Video Production Services  -  Client Testimonials</h4>
<div id="carouselExampleControls" style={{backgroundColor: '#333333'}} class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <p style={{width: '40%',float: 'left'}}>dfhyj</p>
      <p style={{width: '40%',float: 'right'}}>dfgh</p>
    </div>
    <div class="carousel-item">
    <p style={{width: '40%',float: 'left'}}>dfhyj</p>
    <p style={{width: '40%',float: 'right'}}>dfgh</p>
    </div>
    <div class="carousel-item">
    <p style={{width: '40%',float: 'left'}}>dfhyj</p>
    <p style={{width: '40%',float: 'right'}}>dfgh</p>
    </div>
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
</div>
      ]
    )
  }
}

export default HomePage
