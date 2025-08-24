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
      <SwiperSlide><img className='h-full w-full' src="https://i.ibb.co.com/1GWCSc7z/image1.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-full h-full' src="https://i.ibb.co.com/7tVVfXkz/image2.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-full h-full ' src="https://i.ibb.co.com/Mx1TdjGX/image3.jpg" alt="" /></SwiperSlide>
       <SwiperSlide><img className='w-full h-full' src="https://i.ibb.co.com/8gsKGQzp/image4.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className='w-full h-full ' src="https://i.ibb.co.com/84044z51/image5.jpg" alt="" /></SwiperSlide>
      <div className=" z-10 absolute left-3 right-3 top-1/2 flex 
      -translate-y-1/2 transform justify-between">
      <a  className="btn btn-circle">❮</a>
      <a className="btn btn-circle">❯</a>
    </div>
    </Swiper>

    <div className='w-[30%] flex flex-col gap-4 h-full'>
      <img className='h-[48%] rounded-lg' src="https://i.ibb.co.com/d48b1hMB/image6.jpg.jpg" alt="" />
      <img className='h-[48%] rounded-lg' src="https://i.ibb.co.com/SwRhR7zt/image7.jpg" alt="" />
    </div>
    </div>
    
  );
};

export default Slider;
