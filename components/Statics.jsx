import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 4000 });
  const IsInView = useInView(ref, { once: true });
  useEffect(() => {
    if (IsInView) {
      motionValue.set(value);
    }
  }, [IsInView, motionValue, value]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};
const Statics = () => {
  return (
    <div
      className="bg-[url('../assets/stat.jpg')] bg-no-repeat bg-cover bg-[50%] 
        bg-fixed py-[80px] relative text-center z-10
        before:bg-black/20 before:w-full before:h-full before:absolute 
        before:top-0 before:left-0 before:-z-10"
    >
      <div className="container m-auto px-6 text-white">
        <div className="grid w-full grid-cols-8 ">
          <div className="col-span-4  lg:col-span-2 mb-5">
            <h3 className="text-4xl mb-2">
              +<AnimatedNumbers value={30} />
            </h3>
            <p className="text-2xl font-semibold">مشروع ناجح</p>
          </div>
          <div className="col-span-4  lg:col-span-2 mb-5">
            <h3 className="text-4xl mb-2">
              +<AnimatedNumbers value={15} />
            </h3>
            <p className="text-2xl font-semibold">سنوات الخبرة</p>
          </div>
          <div className="col-span-4 lg:col-span-2 mb-5">
            <h3 className="text-4xl mb-2">
              +<AnimatedNumbers value={150} />
            </h3>
            <p className="text-2xl font-semibold">عميل</p>
          </div>
          <div className="col-span-4  lg:col-span-2 mb-5">
            <h3 className="text-4xl mb-2">
              +<AnimatedNumbers value={8} />
            </h3>
            <p className="text-2xl font-semibold">تخصص</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statics;
