import Image from "next/image";
import heroImage from "../assets/hero.jpg";
import heroImage1 from "../assets/hero1.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Hero = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <div className="w-full h-[400px] md:h-[500px] ">
              <Image
                src={heroImage}
                alt="hero"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="w-full h-[400px] md:h-[500px] ">
              <Image
                src={heroImage1}
                alt="hero"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="w-full h-[400px] md:h-[500px] ">
              <Image
                src={heroImage}
                alt="hero"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
