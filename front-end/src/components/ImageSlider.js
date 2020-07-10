import React, { Component } from 'react';
import Image1 from '../assets/images/image1.jpg';
import Image2 from '../assets/images/image2.jpg';
import Image3 from '../assets/images/image3.jpg';
import Image4 from '../assets/images/image4.jpg';
import Image5 from '../assets/images/image5.png';
import Slider from './Slider';

const images = [Image1, Image2, Image3, Image4, Image5];

export default class Home extends Component {
  render() {
    return (
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }} />
          <Slider
            options={{
              autoPlay: 4000,
              pauseAutoPlayOnHover: true,
              wrapAround: true,
              fullscreen: true,
              adaptiveHeight: true,
            }}
          >
            {images.map((image, index) => (
              <div style={{ width: '40%', height: '800px', margin: '0 5em', padding:'2em', overflow:'hidden'}} key={index}>
                <img src={image} className='imageFlickity' alt="" />
              </div>
            ))}
          </Slider>
        </div>
    );
  }
}