import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { cards } from "../utils/data";

const Hero = () => {
  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        loop={true}
      >
        {cards.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative">
              <div className="w-full h-[400px] md:h-[500px] ">
                <Image
                  src={item.imageUrl}
                  alt="hero"
                  className="w-full h-full object-cover"
                  priority
                />
                {/* <h2
                  className="absolute text-white font-bold top-2/4 left-2/4 
                   -translate-x-8 -translate-y-3/4"
                >
                  {item.title}
                </h2> */}
              </div>
              <div
                className="absolute bottom-0 w-full h-1/5 z-20 
                  bg-gradient-to-b from-transparent to-white"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Hero;
