import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { useEffect, useState } from 'react'
import { MdEast, MdWest } from 'react-icons/md'
import { useMediaQuery } from 'react-responsive'

const About = () => {
  const [swiper, setSwiper] = useState()
  const [render, setRender] = useState(true)
  const isDesktop = useMediaQuery({ query: `(min-width: 1024px)` })

  const data = [
    {
      title: 'Who we are',
      subtitle: 'Technology Company',
      content:
        'Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    },
    {
      title: 'What we do',
      subtitle: 'Professional Brand Management',
      content:
        'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    },
    {
      title: 'How we do',
      subtitle: 'Strategize, Design, Collaborate',
      content:
        'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.',
    },
  ]

  useEffect(() => {
    if (isDesktop) {
      if (data.length > 3) {
        setRender(true)
      } else {
        setRender(false)
      }
    }
  }, [isDesktop, data.length])

  return (
    <div id='about' className="mt-40 lg:mt-0 p-8 lg:py-12 container mx-auto">
      <Swiper
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        slidesPerView={1}
        navigation={false}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        onSwiper={(s) => {
          setSwiper(s)
        }}
        pagination={{
          type: 'fraction',
          el: '.my-custom-pagination-div',
          formatFractionCurrent: (number) => {
            return '0' + number
          },
          formatFractionTotal: (number) => {
            return '0' + number
          },
          renderFraction: (currentClass, totalClass) => {
            return (
              `<span class="${currentClass} text-2xl"></span>` +
              ' <span class="text-gray-300 text-2xl">/</span> ' +
              `<span class="${totalClass} text-gray-300"></span>`
            )
          },
        }}
      >
        {data.map((d) => (
          <SwiperSlide key={d.title}>
            <div className="flex flex-col gap-y-3 h-80">
              <h1 className="text-blue-title">{d.title}</h1>
              <div className="">
                <h4>{d.subtitle}</h4>
                <p className="text-sm text-grey-p leading-6">{d.content}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {render && (
        <div className="flex justify-between items-center">
          <div>
            <div className="my-custom-pagination-div" />
          </div>
          <div>
            <button
              className="bg-gray-300 p-2 hover:opacity-75"
              onClick={() => swiper.slidePrev()}
            >
              <MdWest color="white" size={20} />
            </button>
            <button
              className="bg-blue-title p-2 hover:opacity-75"
              onClick={() => swiper.slideNext()}
            >
              <MdEast color="white" size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default About
