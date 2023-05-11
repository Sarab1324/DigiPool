import React from 'react'
import InfiniteCarousel from 'react-leaf-carousel';
function SlidePartner() {
  return (
    <InfiniteCarousel 
    breakpoints={[
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={false}
    showArrows={false}
    showSides={false}
    sidesOpacity={.5}
    sideSize={.1}
    slidesToScroll={1}
    loop={true}
    interval={100}
    slidesToShow={4}
    scrollOnDevice={true}
    autoCycle={true}
  >
    <div>
      <img
      width={50}
      className='img'
        alt=''
        src='https://www.exmyb.com/_next/image?url=https%3A%2F%2Fmain.exmyb.com%2F_next%2Fstatic%2Fmedia%2Faajtak.5b12ca89.png&w=128&q=75'
      />
    </div>
    <div>
      <img
      className='img'
      width={50}
        alt=''
        src='https://www.exmyb.com/_next/image?url=https%3A%2F%2Fmain.exmyb.com%2F_next%2Fstatic%2Fmedia%2Foye.388e647b.png&w=128&q=75'
      />
    </div>
    <div>
      <img
      className='img'
      width={50}
        alt=''
        src='https://www.exmyb.com/_next/image?url=https%3A%2F%2Fmain.exmyb.com%2F_next%2Fstatic%2Fmedia%2FpernodRichard.3ec7f827.png&w=128&q=75'
      />
    </div>
    <div>
      <img
      className='img'
      width={50}
        alt=''
        src='https://www.exmyb.com/_next/image?url=https%3A%2F%2Fmain.exmyb.com%2F_next%2Fstatic%2Fmedia%2Ffedex.9e93c3b5.png&w=128&q=75'
      />
    </div>
    <div>
      <img
      className='img'
      width={50}
        alt=''
        src='https://www.exmyb.com/_next/image?url=https%3A%2F%2Fmain.exmyb.com%2F_next%2Fstatic%2Fmedia%2Fclove.49d8a81c.png&w=128&q=75'
      />
    </div>
    <div>
      <img
      className='img'
      width={50}
        alt=''
        src='https://www.exmyb.com/_next/image?url=https%3A%2F%2Fmain.exmyb.com%2F_next%2Fstatic%2Fmedia%2Fswiggy.292abc88.png&w=128&q=75'
      />
    </div>
    <div>
      <img
      className='img'
      width={50}
        alt=''
        src='https://www.exmyb.com/_next/image?url=https%3A%2F%2Fmain.exmyb.com%2F_next%2Fstatic%2Fmedia%2Fflipkart.d7e45ea1.png&w=128&q=75'
      />
    </div>
    <div>
      <img
      className='img'
      width={50}
        alt=''
        src='https://www.exmyb.com/_next/image?url=https%3A%2F%2Fmain.exmyb.com%2F_next%2Fstatic%2Fmedia%2Fconcern.e86a9adc.png&w=128&q=75'
      />
    </div>
   
  
  </InfiniteCarousel>
  )
}

export default SlidePartner