import React, { Component } from 'react';
import Line from '../../atoms/Line';
import Button from 'material-ui/FlatButton';


class CommercialsPage extends Component {

  render() {
    return (
      <div className='service-child'>
      <div className="splash-banner">
        <img className="splash-photo" src='' alt="splash-photo"/>
      </div>
      <h1>Commercials</h1>
      <Line/>
      <p>When introducing your company to a new client or customer you have a big opportunity to make a positive and lasting impression. Enter the branding video; an effective and creative way to communicate your company’s goals, culture and product offering. Most importantly, brand videos are a compelling way to visually tell your unique story.
We work closely with you to fully understand your brand promise so that you can create meaningful and emotional connections with your customers. We do this through good storytelling, and our goal is to make your brand unforgettable.</p>
      <Button label='See our branding videos'/>
      </div>
    )
  }
}

export default CommercialsPage;
