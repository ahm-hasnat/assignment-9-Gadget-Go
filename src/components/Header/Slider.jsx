import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
  return (
    <div className='flex gap-3 justify-start items-center h-112 p-5  mt-6'>
    <Swiper className='relative w-[68%] rounded-xl h-full'
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 3000, 
        disableOnInteraction: false, 
      }}
      pagination={{ clickable: true }}
      navigation
    >
      <SwiperSlide><img className='h-full w-full' src="/src/assets/image1.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-full h-full' src="/src/assets/smart.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-full h-full ' src="/src/assets/image.jpg" alt="" /></SwiperSlide>
       <SwiperSlide><img className='w-full h-full' src="/src/assets/gad2.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-full h-full ' src="/src/assets/gad4.jpg" alt="" /></SwiperSlide>
      <div className=" z-10 absolute left-3 right-3 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a  className="btn btn-circle">❮</a>
      <a className="btn btn-circle">❯</a>
    </div>
    </Swiper>

    <div className='w-[30%] flex flex-col gap-4 h-full'>
      <img className='h-[48%] rounded-lg' src="/src/assets/gad.jpg" alt="" />
      <img className='h-[48%] rounded-lg' src="/src/assets/gad3.jpg" alt="" />
    </div>
    </div>
    
  );
};

export default Slider;