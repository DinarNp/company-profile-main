import Image from 'next/image'
import React from 'react'
import { Autoplay, Pagination } from 'swiper'
import { SwiperSlide, Swiper } from 'swiper/react'

const HomeSlide = ({ image }) => {
  return (
    <div className={`service-carousel`}>
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={image.length > 1 ? { clickable: true } : false}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false
        }}
        init={image.length > 1 ? false : true}
      >
        {/* Slides */}
        {image.map((slide, index) => (
          <SwiperSlide
            key={index}
            className='flex justify-center w-full max-h-[65vh]'
          >
            <Image
              src={slide}
              alt=''
              className='object-contain'
              width={1024}
              height={720}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HomeSlide
