import homeIcon from "../assets/home.png";
import homesIcon from "../assets/homes.png";
import blocksIcon from "../assets/blocks.png";
import Image from "next/image";
const Provide = () => {
  return (
    <div className="bg-secondColor w-full py-10">
      <div className="container m-auto px-6">
        <div className="grid w-full grid-cols-9 gap-7 md:gap-12">
          <div className="col-span-9 md:col-span-3 flex flex-col ">
            <div className="px-14 py-10 text-center shadow-custom rounded-md flex flex-col items-center">
              <Image src={blocksIcon} alt="home" className="w-20 mb-2" />
              <h2 className="text-2xl font-semibold">3</h2>
              <h2 className="text-xl font-semibold">عدد المبانى </h2>
            </div>
          </div>
          <div className="col-span-9 md:col-span-3 flex flex-col ">
            <div className="px-14 py-10 text-center shadow-custom rounded-md flex flex-col items-center">
              <Image src={homesIcon} alt="home" className="w-20 mb-2" />
              <h2 className="text-2xl font-semibold">35</h2>
              <h2 className="text-xl font-semibold">عدد الوحدات </h2>
            </div>
          </div>
          <div className="col-span-9 md:col-span-3 flex flex-col ">
            <div className="px-14 py-10 text-center shadow-custom rounded-md flex flex-col items-center">
              <Image src={homeIcon} alt="home" className="w-20 mb-2" />
              <h2 className="text-2xl font-semibold">2</h2>
              <h2 className="text-xl font-semibold">عدد الفلل </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Provide;
