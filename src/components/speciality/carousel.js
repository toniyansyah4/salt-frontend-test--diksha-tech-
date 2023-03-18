import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useState } from 'react'
import { MdEast, MdWest } from 'react-icons/md'

const Carousel = () => {
  const [swiper, setSwiper] = useState()
  const data = [
    {
      src: '/assets/pen.png',
      text: 'accessories',
    },
    {
      src: '/assets/speedometer.png',
      text: 'Speed Improvment',
    },
    {
      src: '/assets/exhaust.png',
      text: 'Exhaust',
    },
  ]

  return (
    <div className="mt-7">
      <div className="flex w-full justify-center">
        <Swiper
          autoHeight={true}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          loopedSlides={data.length}
          slidesPerView={2}
          spaceBetween={60}
          centeredSlides={true}
          loop={true}
          pagination={{
            type: 'bullets',
            el: '.my-custom-pagination-div-carousel',
            clickable: true,
          }}
          onSwiper={(s) => {
            setSwiper(s)
          }}
          modules={[Pagination]}
          className="coreSwiper linear-gradient"
        >
          {data.map((d) => (
            <SwiperSlide key={d.text}>
              {({ isActive }) => (
                <div className={isActive ? '-top-3 md:-top-5 lg:-top-8 relative' : ''}>
                  <div className="flex justify-center">
                    <img src={d.src} alt={d.text} />
                  </div>
                  <div className="pt-2 text-center text-sm text-grey-text-dark leading-4 font-medium whitespace-nowrap">
                    {isActive ? d.text : ''}
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <p className="mt-2 text-sm text-grey-p-light font-light leading-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod
        libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc
        sit amet congue aliquam.
      </p>
      <div className="mt-11 flex w-full justify-between items-center">
        <button className="hover:opacity-75" onClick={() => swiper.slidePrev()}>
          <MdWest color="#3D46A2" size={20} />
        </button>
        <div className="flex my-custom-pagination-div-carousel justify-center" />
        <button className="hover:opacity-75" onClick={() => swiper.slideNext()}>
          <MdEast color="#3D46A2" size={20} />
        </button>
      </div>
    </div>
  )
}

export default Carousel
