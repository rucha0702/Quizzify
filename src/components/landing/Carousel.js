import React, { useState } from "react";
// import { useSwipeable } from "react-swipeable";
// import Slider from "react-slick";
// import { Swiper, SwiperSlide } from "react-id-swiper";

// const images = [
//     "https://via.placeholder.com/400x400?text=Image1",
//     "https://via.placeholder.com/400x400?text=Image2",
//     "https://via.placeholder.com/400x400?text=Image3",
//   ];

//   const params = {
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   };

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
const Carousel = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const handleSwipeLeft = () => {
//     setCurrentImageIndex(currentImageIndex + 1);
//   };

//   const handleSwipeRight = () => {
//     setCurrentImageIndex(currentImageIndex - 1);
//   };

  return (
    // <useSwipeable onSwipedLeft={handleSwipeLeft} onSwipedRight={handleSwipeRight}>
    //   <div>
    //     <img src={images[currentImageIndex]} alt="" />
    //   </div>
    // </useSwipeable>
    <div>
        {/* <Swiper {...params}>
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt="" />
        </SwiperSlide>
      ))}
      <div className="swiper-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </Swiper> */}
    carousel
    </div>
  );
};

export default Carousel;
