import React, { Component } from 'react';
import Image1 from '../../assets/images/image1.jpg';
import Image2 from '../../assets/images/image2.jpg';
import Image3 from '../../assets/images/image3.jpg';
import Image4 from '../../assets/images/image4.jpg';
import Image5 from '../../assets/images/image5.png';
import Slider from './Slider';

const images = [Image1, Image2, Image3, Image4, Image5];

export default class ImageSlider extends Component {
  render() {
    return (
        <div className="image-slider">
          <div style={{ display: 'flex', justifyContent: 'space-between' }} />
          <Slider
            options={{
              autoPlay: 4000,
              pauseAutoPlayOnHover: true,
              wrapAround: true,
              freeScroll: true,
              contain: true,
              fullscreen: true,
              adaptiveHeight: true
            }}
          >
            {images.map((image, index) => (
                <img src={image} className='image' key={index} alt="" />
            ))}
          </Slider>
        </div>
    );
  }
}