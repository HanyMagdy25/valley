import Image from "next/image";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cardGuaranteeData } from "../utils/data";

const CardGuarantee = ({ item }) => {
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
      className="col-span-10 sm:col-span-5 md:col-span-2 flex flex-col "
    >
      <div className="px-1 py-6 text-center shadow-custom rounded-md flex flex-col items-center">
        <Image src={item.image} alt="home" className="w-20 mb-2" />
        <h2 className="text-xl font-semibold">{item.title}</h2>
        <h2 className="text-xl font-semibold text-gray-700">{item.num} سنة</h2>
      </div>
    </motion.div>
  );
};

const Guarantee = () => {
  return (
    <section className="py-10 mt-8 mb-8">
      <div className="container mx-auto px-6">
        <div className="mx-auto  block px-6 text-center">
          <h2 className="mx-auto text-4xl font-bold md:text-4xl ">نضمن لك</h2>
          <div className="mx-auto mt-6 mb-auto block w-full text-xl font-normal leading-9 text-gray-600 md:w-3/4 xl:w-3/4">
            <p className="text-base">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى هذا النص هو مثال لنص يمكن أن يستبدل .
            </p>
          </div>
        </div>
        <div className="grid w-full grid-cols-10 gap-7 mt-8">
          {cardGuaranteeData.map((item) => (
            <CardGuarantee item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
