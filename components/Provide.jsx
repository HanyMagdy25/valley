import Image from "next/image";
import { cardProvideData } from "../utils/data";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CardProvide = ({ item }) => {
  const squareVariants = {
    visible: { scale: 1, transition: { duration: 0.5 } },
    hidden: { scale: 0 },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={"easeInOut"}
      variants={squareVariants}
      className="col-span-12 sm:col-span-6 md:col-span-4 flex flex-col "
    >
      <div className="px-4 py-6 text-center shadow-custom rounded-md flex flex-col items-center">
        <Image src={item.image} alt="home" className="w-20 mb-2" />
        <h2 className="text-2xl font-semibold">{item.num}</h2>
        <h2 className="text-xl font-semibold">{item.title}</h2>
      </div>
    </motion.div>
  );
};
const Provide = () => {
  return (
    <div className="bg-secondColor w-full py-10">
      <div className="container m-auto px-6">
        <div className="grid w-full grid-cols-12 gap-7 md:gap-12">
          {cardProvideData.map((item) => (
            <CardProvide item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Provide;
