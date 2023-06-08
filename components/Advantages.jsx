import Image from "next/image";
import floorImage from "../assets/advantages/floor.png";
import doorImage from "../assets/advantages/door.png";
import plugImage from "../assets/advantages/plug.png";
import quarantineImage from "../assets/advantages/quarantine.png";
import roofImage from "../assets/advantages/roof.png";
import rollerImage from "../assets/advantages/roller.png";
import faucetImage from "../assets/advantages/faucet.png";
import paintImage from "../assets/advantages/paint.png";
const advData = [
  {
    id: 1,
    image: floorImage,
    title: "الأرضيات",
    desc: "رخام وسيراميك",
  },
  {
    id: 2,
    image: doorImage,
    title: "الأبواب",
    desc: "خشب",
  },
  {
    id: 3,
    image: plugImage,
    title: "الكهرباء",
    desc: "الفنار",
  },
  {
    id: 4,
    image: quarantineImage,
    title: "العزل",
    desc: "مائي حرارى",
  },
  {
    id: 5,
    image: roofImage,
    title: "الأسقف",
    desc: "جيبس",
  },
  {
    id: 6,
    image: paintImage,
    title: "الدهان الخارجى",
    desc: "الجزيرة",
  },
  {
    id: 7,
    image: roofImage,
    title: "النوافذ",
    desc: "دبل جيلاتين",
  },
  {
    id: 8,
    image: faucetImage,
    title: "المواد الصحية",
    desc: "مائي حرارى",
  },
  {
    id: 9,
    image: rollerImage,
    title: "الدهان الداخلى",
    desc: "الجزيرة",
  },
];
const Advantages = () => {
  return (
    <section className="mx-auto px-6 text-gray-800 md:max-w-screen-xl">
      <div className="mx-auto mt-20 mb-14 block px-6 text-center">
        <h2 className="mx-auto text-4xl font-bold md:text-4xl">مميزات المشروع</h2>
        {/* <div className="mx-auto mt-6 mb-auto block w-full text-xl font-normal leading-9 text-gray-700 md:w-3/4 xl:w-3/4">
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
            provident repellat cupiditate blanditiis! Sit temporibus doloremque
            molestias, aut necessitatibus quisquam non deleniti debitis aperiam
            ullam! Repudiandae, debitis iure libero reiciendis ducimus
            temporibus!
          </p>
        </div> */}
      </div>

      <div className="grid gap-6 md:gap-10 pb-20 sm:grid-cols-2 lg:grid-cols-3">
        {advData.map((item) => (
          <div
            key={item.id}
            className="rounded-md border border-gray-200 bg-white p-8 shadow-sm"
          >
            <div className="my-2 flex items-center">
              <div className="ml-4 flex h-12 w-12 items-center justify-center rounded-lg border bg-blue-50 text-2xl text-blue-500">
                <Image src={item.image} alt="floorImage" priority />
              </div>
              <h3 className="text-2xl font-semibold md:text-xl">{item.title}</h3>
            </div>
            <p className="text-gray-600  font-semibold">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
