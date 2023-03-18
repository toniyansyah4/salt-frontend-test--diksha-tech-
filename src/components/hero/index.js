import {BsChevronDoubleDown} from "react-icons/bs"

const Hero = () => {
  const handleClick = () => {
    window.location.assign('#about');
  }

  return (
    <div className="bg-blue-hero">
      {/* <img src="assets/hero.png" alt="hero" className="w-full relative lg:-top-14" /> */}
      <div
        className="w-full lg:flex lg:min-h-screen lg:items-end"
        style={{
          backgroundImage: `url('/assets/hero.png')`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
        }}
      >
        <div
          className="w-full relative lg:static top-40 h-80 flex items-center"
          style={{
            backgroundImage: `url('/assets/bg-hero.png')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
          }}
        >
          <div className=" text-white max-w-md">
            <div className="px-6">
              <h1>Discover Your Wonder</h1>
              <p className="mt-4 text-sm leading-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
            <div className="absolute flex w-full justify-center -bottom-4 lg:-bottom-24">
              <button onClick={handleClick} className="bg-white shadow-xl p-2 rounded-full">
                <BsChevronDoubleDown size={20} color="black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
