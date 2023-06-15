import Image from "next/image";
import checkMark from "../assets/check-mark.png";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { afterPurchaseData } from "../utils/data";

const AfterPurchaseContent = ({ item }) => {
  const squareVariants = {
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
    hidden: { opacity: 0, x: -50 },
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
      className="flex col-span-12 md:col-span-6 gap-3 items-center mb-3"
    >
      <Image src={checkMark} alt="checkMark" priority width={50} height={50} />
      <h3>{item.title}</h3>
    </motion.div>
  );
};
export const AfterPurchase = () => {
  return (
    <section className="py-10 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mx-auto  block px-6 text-center">
          <h2 className="mx-auto text-4xl font-bold md:text-4xl ">
            خدمات ما بعد البيع
          </h2>
          <div className="mx-auto mt-6 mb-auto block w-full text-xl font-normal leading-9 text-gray-600 md:w-3/4 xl:w-3/4">
            <p className="text-base">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى هذا النص هو مثال لنص يمكن أن يستبدل .
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-8">
          {afterPurchaseData.map((item) => (
            <AfterPurchaseContent item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};
