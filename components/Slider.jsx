import Image from "next/image";
// import { cards } from "../utils/data";
// import heroImage from "../assets/hero.jpg";
// import heroImage1 from "../assets/hero1.jpg";
import { hoverCardsData } from "../utils/data";

const CardHover = ({ item }) => {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-4 group relative  h-96 w-full overflow-hidden rounded-lg shadow-custom">
      <div className="absolute left-0 top-0 h-full w-full transition-all duration-300 ease-in-out group-hover:-top-96">
        <Image
          className="h-4/6 w-full object-cover"
          src={item.imageUrl}
          alt="heroImage"
          priority
        />
        <h1 className="mt-4 px-4 text-center text-xl font-semibold text-primary">
          {item.title}
        </h1>
        <p className="mt-1 mb-3 px-4 text-center text-gray-600">
          {item.smallDescription}
        </p>
      </div>

      <div className="absolute left-0 -bottom-96 flex h-full w-full flex-col justify-center transition-all duration-300 ease-in-out group-hover:bottom-0">
        <h1 className="mb-2 px-8 text-center text-xl font-semibold text-primary">
          {item.title}
        </h1>
        <p className="px-8 text-center">{item.bigDescription}</p>
      </div>
    </div>
  );
};

const Slider = () => {
  return (
    <div className=" w-full py-14">
      <div className="container m-auto px-6">
        <div className="grid w-full grid-cols-12 gap-7 md:gap-12">
          {hoverCardsData.map((item) => (
            <CardHover item={item} key={item.id} />
          ))}
          {/* <CardHover /> */}
          {/* <CardHover /> */}
        </div>
      </div>
    </div>
  );
};

export default Slider;
