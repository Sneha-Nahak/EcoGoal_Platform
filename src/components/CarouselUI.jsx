import React from 'react';
import { Carousel } from 'antd';
import greeneryOne from '../assets/greenery-1.jpg'
import greeneryTwo from '../assets/greenery-2.jpg'
import greeneryThree from '../assets/greenery-3.jpg'
import greeneryFour from '../assets/greenery-4.jpg'




const CarouselUI = () => (
  <Carousel autoplay>
    <div>
      <img src={greeneryOne}  alt="greeneryOne" />
    </div>
    <div>
      <img src={greeneryTwo}  alt="greeneryTwo" />
    </div>
    <div>
      <img src={greeneryThree}  alt="greeneryThree" />
    </div>
    <div>
     <img src={greeneryFour}  alt="greeneryFour" />
    </div>
  </Carousel>
);
export default CarouselUI;