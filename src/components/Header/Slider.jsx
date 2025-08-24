import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slider = () => {
  return (
    <div className='flex flex-wrap gap-3 justify-start items-center h-auto p-5 mt-6'>
  <Swiper
    className='relative w-full md:w-[68%] rounded-xl h-[300px] md:h-[448px] lg:h-112'
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
    <SwiperSlide>
      <img className='h-full w-full object-cover rounded-xl' 
      src="https://i.ibb.co.com/1GWCSc7z/image1.jpg" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img className='w-full h-full object-cover rounded-xl' 
      src="https://i.ibb.co.com/7tVVfXkz/image2.jpg" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img className='w-full h-full object-cover rounded-xl' 
      src="https://i.ibb.co.com/Mx1TdjGX/image3.jpg" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img className='w-full h-full object-cover rounded-xl' 
      src="https://i.ibb.co.com/8gsKGQzp/image4.jpg" alt="" />
    </SwiperSlide>
    <SwiperSlide>
      <img className='w-full h-full object-cover rounded-xl' 
      src="https://i.ibb.co.com/JWQrHB8L/image-5.jpg" alt="" />
    </SwiperSlide>

    <div className="z-10 absolute left-3 right-3 top-1/2 
    flex -translate-y-1/2 transform justify-between">
      <a className="btn btn-circle">❮</a>
      <a className="btn btn-circle">❯</a>
    </div>
  </Swiper>

  <div className='w-full md:w-[30%] flex flex-col gap-4 mt-4 md:mt-0 h-[300px]
   md:h-[448px] lg:h-112'>
    <img className='h-1/2 rounded-lg object-cover'
     src="https://i.ibb.co.com/d48b1hMB/image6.jpg.jpg" alt="" />
    <img className='h-1/2 rounded-lg object-cover' 
    src="https://i.ibb.co.com/SwRhR7zt/image7.jpg" alt="" />
  </div>
</div>

    
  );
};

export default Slider;
{/* <a href="https://ibb.co.com/5XFsLMCD"><img src="https://i.ibb.co.com/JWQrHB8L/image-5.jpg" alt="image-5" border="0" /></a> */}