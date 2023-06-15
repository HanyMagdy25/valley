import Image from "next/image";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

import CardAdvs from "./CardAdvs";
import { advData } from "../utils/data";

const Advantages = () => {

  return (
    <section className="text-gray-800">
      <div className="container m-auto px-6">
        <motion.div
          className="mx-auto mt-20 mb-14 block px-6 text-center"
          // animate="visible"
          // initial="hidden"
          // variants={squareVariants}
        >
          <h2 className="mx-auto text-4xl font-bold md:text-4xl ">
            مميزات المشروع
          </h2>
          <div className="mx-auto mt-6 mb-auto block w-full text-xl font-normal leading-9 text-gray-700 md:w-3/4 xl:w-3/4">
            <p className="text-base">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى هذا النص هو مثال لنص يمكن أن يستبدل
              في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى المساحة،
              لقد تم توليد هذا النص من مولد النص العربى.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-4 md:gap-6 pb-20 sm:grid-cols-2 lg:grid-cols-3">
          {advData?.map((item) => (
            <CardAdvs item={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
