import React, { Component } from 'react';
import Line from '../atoms/Line';
import Button from 'material-ui/FlatButton';


class ServicePage extends Component {

  render() {
    return (
      <div>
      <div className="splash-banner">
        <img className="splash-photo" alt="splash-photo"/>
        <div className="button">
          <h2><b>Let us tell your story</b></h2>
          <Button
          primary={true}
          className='demo-reel-button'
          label='SEE OUR DEMO REEL'/>
        </div>
      </div>
      <h1>Video Production Services</h1>
      <Line/>
      <p>InFrame Media Productions is a full service Gold Coast based video production and creative services company. But really…we help you tell stories. And we’ve been doing it since 2004. The tools of our trade are curiosity, creativity, attentiveness, and partnership. We specialize in creating videos that connect with your audience in powerful ways. We do this through many formats including:</p>
      <h1>hai</h1>
      <div className="button-group">
      <Button primary={true} label='Branding Videos'/>
      <Button primary={true} label='Product Videos'/>
      <Button primary={true} label='Web Videos'/>
      <Button primary={true} label='Commericals'/>
      <Button primary={true} label='Testimonials'/>
      <Button primary={true} label='Training Videos'/>
      <Button primary={true} label='Live Event Videos'/>
      <Button primary={true} label='Motion Graphics'/>
      <Button primary={true} label='Supporting Videos'/></div>
      </div>
    )
  }
}

export default ServicePage;
