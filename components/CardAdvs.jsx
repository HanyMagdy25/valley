import Image from "next/image";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CardAdvs = ({ item }) => {
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
      className={`rounded-md border border-gray-200 bg-white px-8 
              py-2 md:py-3 shadow-sm transition-all duration-500   `}
    >
      <div className="my-2 flex items-center">
        <div className="ml-4 flex h-12 w-12 items-center justify-center rounded-lg border bg-blue-50 text-2xl text-blue-500">
          <Image src={item.image} alt="floorImage" priority />
        </div>
        <h3 className="text-2xl font-semibold md:text-xl">{item.title}</h3>
      </div>
      <p className="text-gray-600  font-semibold">{item.desc}</p>
    </motion.div>
  );
};

export default CardAdvs;
